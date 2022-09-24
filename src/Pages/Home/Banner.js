import React from 'react';
import "../../Pages/Styles/Banner.css"
import image from "../../Asset/Banner/bannerImg.png"
import shape from "../../Asset/Banner/Vector 1.png"
import { Icon } from '@iconify/react';
const Banner = () => {
  return (
    <div className="Banner-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="banner-heading mt-5 pt-5">
              <h3>Hello I Am</h3>
              <div className="image-shape">
                <h1>Aonik Paul Alock</h1>
                <img src={shape} alt="" className="image-place" />
              </div>
              <h4>Junior Full Stack Developer</h4>
              <button className="resume-button d-flex justify-align-content-center align-items-center">
                <Icon icon="bi:download" className="download-icon" />
                Download Resume</button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;