import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cert1 from "./cert1.png";
import cert2 from "./cert2.jpg";
import cert3 from "./COP.jpeg";
import cert4 from "./cert4.png";
import cert5 from "./cert5.png";
import cert6 from "./cert6.png";
import "./Certificate.css";

const Certificate = () => {
  return (
    <div className="cont certificate-container pd-tp">

      <h2 className="text-center text-blue down">
        <u>Certificates I have achieved</u>
      </h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 certificate-img"
            src={cert1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chat-bot Development</h3>
            <p>Participation and attendance.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 certificate-img"
            src={cert2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Poster Competition</h3>
            <p>Certificate of participation.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 certificate-img"
            src={cert3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>International Symposium on AI and Robotics</h3>
            <p>Certificate of participation and attendance.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 certificate-img"
            src={cert4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>ML Explainability</h3>
            <p>
              Kaggle certificate of course completion.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 certificate-img"
            src={cert5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Data Visualization</h3>
            <p>Kaggle certificate of course completion.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 certificate-img"
            src={cert6}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Feature Engineering</h3>
            <p>
            Kaggle certificate of course completion.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Certificate;
