// Anonymous visit and interest tracking with GoatCounter (no cookies, no personal data).
// Loaded only on the live github.io site, so local development is never counted.
// Every event is a fixed path starting with "home/" so it sits apart from other sites on the same dashboard:
//   home/section/<id>            a section was scrolled into view (once per visit)
//   home/project/<name>          a portfolio project was scrolled into view
//   home/scroll/<25|50|75|100>   how far down the page the visitor got
//   home/time/<30s|1m|3m|5m>     time spent with the page visible
//   home/click/...               what was clicked: social, resume, email, nav, project links, repo cards
//   home/video/<project>         a project video was played
//   home/carousel/<project>      someone browsed a project's screenshots

const ENDPOINT = "https://drnitro.goatcounter.com/count";
const queue = [];
const sent = new Set();

const slug = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "unknown";

function send(path, title) {
  const gc = window.goatcounter;
  if (gc && gc.count) {
    try { gc.count({ path, title: title || path, event: true }); } catch (e) { /* never break the page */ }
  } else {
    queue.push([path, title]);
  }
}

// count an event; `once` limits it to one per visit
export function track(path, title, once = false) {
  const full = "home/" + path;
  if (once) {
    if (sent.has(full)) return;
    sent.add(full);
  }
  send(full, title);
}

const projectOf = (el) => {
  const item = el.closest(".portfolio-item");
  return item ? slug(item.querySelector("h3")?.textContent) : null;
};

function classifyClick(a) {
  const href = a.getAttribute("href") || "";
  const label = slug(a.textContent || a.getAttribute("aria-label"));
  if (href.startsWith("mailto:")) return "click/email";
  if (/\.pdf($|\?)/i.test(href) || /resume/i.test(a.getAttribute("aria-label") || "") || label === "resume") return `click/resume/${a.closest(".navbar") ? "navbar" : "page"}`;
  if (a.closest(".navbar")) return `click/nav/${href.includes("#") ? slug(href.split("#")[1]) : label}`;
  if (a.querySelector(".socialicons")) {
    const icon = a.querySelector(".socialicons").className.match(/fa-(github|instagram|linkedin|twitter|youtube)/);
    return `click/social/${icon ? icon[1] : "other"}`;
  }
  const project = projectOf(a);
  if (project) return `click/project/${project}/${label}`;
  const card = a.closest("#projects .card");
  if (card) return `click/repo/${slug(card.querySelector(".card-title")?.textContent)}/${label}`;
  if (href.startsWith("#") || href.includes("/#")) return `click/jump/${slug(href.split("#")[1])}`;
  if (/^https?:/.test(href)) return `click/external/${slug(new URL(href).hostname)}`;
  return null;
}

function setupObservers() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        // "seen" = 35% of it visible, or (for sections taller than the screen) it fills half the screen
        if (!e.isIntersecting || (e.intersectionRatio < 0.35 && e.intersectionRect.height < window.innerHeight * 0.5)) continue;
        const el = e.target;
        if (el.classList.contains("portfolio-item")) track(`project/${slug(el.querySelector("h3")?.textContent)}`, "Project seen", true);
        else track(`section/${el.id}`, "Section seen", true);
        io.unobserve(el);
      }
    },
    { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
  );
  const watch = () => {
    document.querySelectorAll("#aboutme, #leadership, #experience, #education, #projects, #skills, .portfolio-item").forEach((el) => {
      if (!el.dataset.gcWatched) { el.dataset.gcWatched = "1"; io.observe(el); }
    });
  };
  watch();
  // sections render after data loads; pick up anything that appears later
  new MutationObserver(watch).observe(document.getElementById("root"), { childList: true, subtree: true });
}

function setupScrollDepth() {
  const marks = [25, 50, 75, 100];
  const onScroll = () => {
    const doc = document.documentElement;
    const pct = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
    for (const m of marks) if (pct >= m - 1) track(`scroll/${m}`, `Scrolled ${m}%`, true);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupTimeOnPage() {
  const marks = [[30, "30s"], [60, "1m"], [180, "3m"], [300, "5m"]];
  let visibleSeconds = 0;
  setInterval(() => {
    if (document.visibilityState !== "visible") return;
    visibleSeconds += 5;
    for (const [s, name] of marks) if (visibleSeconds >= s) track(`time/${name}`, `On page ${name}`, true);
  }, 5000);
}

function setupInteractions() {
  document.addEventListener(
    "click",
    (e) => {
      const ctrl = e.target.closest(".carousel-control-prev, .carousel-control-next, .carousel-indicators button");
      if (ctrl) {
        const project = projectOf(ctrl);
        if (project) track(`carousel/${project}`, "Browsed screenshots");
        return;
      }
      const a = e.target.closest("a[href]");
      if (!a) return;
      const name = classifyClick(a);
      if (name) track(name, "Click");
    },
    true
  );
  // the play event doesn't bubble, so listen in the capture phase
  document.addEventListener(
    "play",
    (e) => {
      if (e.target.tagName !== "VIDEO") return;
      track(`video/${projectOf(e.target) || "unknown"}`, "Played a video", false);
    },
    true
  );
}

export function initAnalytics() {
  // Add ?gcdebug to the address to see events in the browser console instead of sending them.
  const debug = new URLSearchParams(window.location.search).has("gcdebug");
  if (debug) {
    window.__gcEvents = [];
    window.goatcounter = { count: (o) => { window.__gcEvents.push(o.path); console.info("[goatcounter]", o.path); } };
  } else if (!window.location.hostname.endsWith("github.io")) return;
  setupObservers();
  setupScrollDepth();
  setupTimeOnPage();
  setupInteractions();
  if (debug) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = ENDPOINT;
  s.onload = () => {
    // events that happened before the script arrived
    const wait = setInterval(() => {
      if (!window.goatcounter || !window.goatcounter.count) return;
      clearInterval(wait);
      queue.splice(0).forEach(([p, t]) => send(p, t));
    }, 200);
    setTimeout(() => clearInterval(wait), 10000);
  };
  document.head.appendChild(s);
}
