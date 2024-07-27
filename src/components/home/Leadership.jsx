import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, sections, imageSize }) => {
  return (
    <Jumbotron id="leadership" className="m-0" style={{ backgroundColor: "white" }}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      {sections.map((section, i) => (
        <div className="row mt-5 align-items-center" key={i}>
          {i % 2 === 0 ? (
            <>
              <div className="col-md-6 order-md-1 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h3>{section.heading}</h3>
                  <p className="lead">{section.message}</p>
                </div>
              </div>
              <div className="col-md-6 order-md-2">
                <Carousel>
                  {section.media.map((value, index) => (
                    <Carousel.Item key={index}>
                      {value.type === 'video' ? (
                        <video className="d-block w-100" src={value.src} alt="Video slide" width={imageSize.width} height={imageSize.height} controls>
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img className="d-block w-100" src={value.src} alt="Image slide" width={imageSize.width} height={imageSize.height} />
                      )}
                      <Carousel.Caption>
                        <h3>{value.label}</h3>
                        <p>{value.paragraph}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <h3>{section.heading}</h3>
                  <p className="lead">{section.message}</p>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <Carousel>
                  {section.media.map((value, index) => (
                    <Carousel.Item key={index}>
                      {value.type === 'video' ? (
                        <video className="d-block w-100" src={value.src} alt="Video slide" width={imageSize.width} height={imageSize.height} controls>
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img className="d-block w-100" src={value.src} alt="Image slide" width={imageSize.width} height={imageSize.height} />
                      )}
                      <Carousel.Caption>
                        <h3>{value.label}</h3>
                        <p>{value.paragraph}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </>
          )}
        </div>
      ))}
    </Jumbotron>
  );
};

export default Leadership;
