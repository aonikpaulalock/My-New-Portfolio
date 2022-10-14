import React from 'react';
import "../../Pages/Styles/Banner.css"
import image from "../../Asset/Banner/bannerImg.png"
import shape from "../../Asset/Banner/Vector 1.png"
import Typed from 'react-typed';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const resume = 'https://drive.google.com/file/d/1Ls0I5jjYrqvZzedKyhrjwXuJufnigOa5/view?usp=sharing'
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
              <Typed
                strings={[
                  'Junior Frontend Developer',
                  'React Developer',
                  'Javascript Developer',
                  'Junior Full Stack Developer',
                  'MERN Stack Developer'
                ]}
                typeSpeed={60}
                backSpeed={50}
                className="slider-heading"
                loop
              />

              <button className="resume-button d-flex justify-align-content-center align-items-center">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="link-work">
                <Icon icon="bi:download" className="download-icon" />Download Resume</a> 
               </button>
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