import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, leadership, education, experience } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  // On phones the menu collapses again after a link is tapped (it used to stay open over the page).
  const [expanded, setExpanded] = useState(false);
  const links = [
    about.show && ["#aboutme", "About"],
    leadership.show && ["#leadership", "Portfolio"],
    experience.show && ["#experience", "Experience"],
    education.show && ["#education", "Education"],
    repos.show && ["#projects", "Projects"],
    skills.show && ["#skills", "Skills"],
  ].filter(Boolean);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop || expanded ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"} onClick={() => setExpanded(false)}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav" onClick={(e) => { if (e.target.closest("a")) setExpanded(false); }}>
        <Nav className="navbar-nav me-auto">
          {links.map(([hash, label]) => (
            <NavLink key={hash} className="nav-item lead" href={process.env.PUBLIC_URL + "/" + hash}>
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-item lead" href={about.resume} target="_blank" rel="noreferrer noopener">
            Resume
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
