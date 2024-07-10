import React from 'react';
import "../../Pages/Styles/Banner.css"
import image from "../../Asset/Banner/bannerImg.png"
import shape from "../../Asset/Banner/Vector 1.png"
import Typed from 'react-typed';
import { Icon } from '@iconify/react';
import Header from '../Shared/Header';
const resumeUrl = 'https://drive.google.com/uc?export=download&id=16gF5wUT1y-0f1K1P3-tGTgJmCUiULBy1';
const Banner = () => {
  return (
    <div
      className="Banner-container"
    >
      <Header />
      <div
        className="container"
      >
        <div div className="row" >
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"

            className="col-md-6 col-12 d-flex justify-content-center align-items-center p-sm-0 p-5">
            <div className="banner-heading mt-5 pt-5">
              <h3>Hello I Am</h3>
              <div className="image-shape">
                <h1>Aonik Paul Alock</h1>
                <img src={shape} alt="" className="img-fluid" />
              </div>
              <Typed
                strings={[
                  'Full Stack Developer',
                ]}
                typeSpeed={60}
                backSpeed={50}
                className="slider-heading"
                loop
              />

              <button className="resume-button d-flex justify-align-content-center align-items-center"
              >
                <a
                  href={resumeUrl}
                  download="Aonik Paul Alock Resume.pdf"
                  className="link-work">
                  <Icon icon="bi:download" className="download-icon" />Download Resume</a>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="img-setup">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Banner;