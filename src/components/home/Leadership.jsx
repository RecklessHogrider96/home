import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

// One portfolio entry: text on one side, a media carousel on the other (sides alternate on wide screens).
// Media keeps its real proportions inside a 16:9 frame, captions sit under the media instead of on top of it,
// and slides only change when the visitor clicks, so a video is never swept away mid-play.
const MediaCarousel = ({ media, title }) => (
  <Carousel interval={null} indicators={media.length > 1} controls={media.length > 1} className="portfolio-carousel">
    {media.map((item, index) => (
      <Carousel.Item key={index}>
        <div className="media-frame">
          {item.type === "video" ? (
            <video src={item.src} controls playsInline preload="metadata" aria-label={`${title} video`}>
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item.src} alt={item.paragraph || `${title} screenshot ${index + 1}`} loading="lazy" />
          )}
        </div>
        {(item.label || item.paragraph) && (
          <p className="media-caption">
            {item.label && <strong>{item.label} </strong>}
            {item.paragraph}
          </p>
        )}
      </Carousel.Item>
    ))}
  </Carousel>
);

const Leadership = ({ heading, sections }) => {
  return (
    <Jumbotron id="leadership" className="m-0" style={{ backgroundColor: "white" }}>
      <h2 className="display-4 pb-4 text-center">{heading}</h2>
      {sections.map((section, i) => (
        <div className="row portfolio-item align-items-center g-4 g-lg-5" key={section.heading}>
          <div className={`col-lg-6 ${i % 2 === 0 ? "order-lg-1" : "order-lg-2"}`}>
            {section.badge && <span className="badge rounded-pill portfolio-badge mb-2">{section.badge}</span>}
            <h3 className="mb-3">{section.heading}</h3>
            {section.message && <p className="lead portfolio-text">{section.message}</p>}
            {section.highlights && (
              <ul className="portfolio-highlights">
                {section.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}
            {section.links && (
              <div className="d-flex flex-wrap gap-2 mt-3">
                {section.links.map((link, k) => (
                  <a
                    key={link.url}
                    className={`btn ${k === 0 ? "btn-dark" : "btn-outline-dark"}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon && <i className={`${link.icon} me-2`} aria-hidden="true" />}
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className={`col-lg-6 ${i % 2 === 0 ? "order-lg-2" : "order-lg-1"}`}>
            <MediaCarousel media={section.media} title={section.heading} />
          </div>
        </div>
      ))}
    </Jumbotron>
  );
};

export default Leadership;
