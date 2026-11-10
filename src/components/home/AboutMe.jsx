import React from "react";
import { Jumbotron } from "./migration";

// The old version tried to fetch a profile picture from Instagram's public API, which no longer exists.
// The portrait is a local image, so it is shown directly (smaller and centred on phones, beside the text on wide screens).
const AboutMe = ({ heading, message1, message2, message3, link, imgSize, resume }) => {
  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="row align-items-center g-5">
        {link && (
          <div className="col-lg-5 text-center">
            <img
              className="about-portrait border border-secondary rounded-circle"
              src={link}
              alt="Roshan Bellary"
              width={imgSize}
              height={imgSize}
            />
          </div>
        )}
        <div className={link ? "col-lg-7" : "col-12"}>
          <h2 className="display-4 mb-4 text-center text-lg-start">{heading}</h2>
          {[message1, message2, message3].filter(Boolean).map((m, i) => (
            <p className="lead about-text" key={i}>{m}</p>
          ))}
          {resume && (
            <p className="text-center text-lg-start mt-4 mb-0">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
