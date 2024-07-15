import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message1, img1, message2, img2, message3, img3, message4, img4, message5, img5, message6, img6, message7, img7, message8, img8, message9, img9, message10, img10, message11, img11, message12, img12, message13, img13, message14, img14, message15, img15, message16, img16, message17, img17, message18, img18, message19, img19, message20, img20, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row mt-5">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div className="text-center">
            {message1.includes(':') ? (
              <>
                <h3>{message1.split(':')[0]}</h3>
                <p className="lead">{message1.split(':').slice(1).join(':').trim()}</p>
              </>
            ) : (
              <p className="lead">{message1}</p>
            )}
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
        <Carousel>
          {img1.map((value, index) => {
            return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img2.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message2}</p>
        </div>  
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message3}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img3.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img4.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message4}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message5}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img5.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
      <div className="col-md-6">
          <Carousel>
            {img6.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message6}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message7}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img7.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img8.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message8}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message9}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img9.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img10.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message10}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message11}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img11.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img12.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message12}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message13}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img13.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img14.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message14}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message15}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img15.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img16.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message16}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message17}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img17.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img18.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message18}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p className="lead">{message19}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <Carousel>
            {img19.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
            {img20.map((value, index) => {
              return (
              <Carousel.Item key={index}>
                {value.type === 'video' ? (
                  <video
                    className="d-block w-100"
                    src={value.src}
                    alt="Video slide"
                    width={imageSize.width}
                    height={imageSize.height}
                    controls // Adds play/pause controls to the video
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    className="d-block w-100"
                    src={value.src}
                    alt="Image slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                )}
                <Carousel.Caption>
                  <h3>{value.label}</h3>
                  <p>{value.paragraph}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <p className="lead">{message20}</p>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
