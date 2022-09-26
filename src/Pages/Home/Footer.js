import React from 'react';
import "../../Pages/Styles/Footer.css";
import image from "../../Asset/Footer/Footer.png"
import { Icon } from '@iconify/react';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <img src={image} alt="" />
              <div className="degisnation ms-5">
                <h1>Aonik Paul Alock</h1>
                <h3>Junior Frontend Developer</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="get-in-touch">
              <h3>Get in touch</h3>
              <div className="d-flex align-items-lg-center">
                <div className="me-5">
                  <h4>Email Me</h4>
                  <p>alockpaul9845@gmail.com</p>
                </div>
                <div>
                  <h4>Call Me</h4>
                  <p>+8801703140371</p>
                </div>
              </div>
              <div className="social mt-5 pt-2">
                <h4 className="mb-4">Contact with me</h4>
                <div className="d-flex align-items-center">
                  <div className="facebook-contain me-4">
                  <Icon icon="eva:facebook-fill"  className="facebook-icon"/>
                  </div>
                  <div className="twitter-contain me-4">
                  <Icon icon="bxl:twitter" className="twitter-icon" />
                  </div>
                  <div className="linkedin-contain me-4">
                  <Icon icon="bxl:linkedin" className="linkedin-icon"/>
                  </div>
                  <div className="insta-contain me-4">
                  <Icon icon="la:instagram"  className="insta-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <hr className="horizantal-line" />
        <p className="copyright">© 2022 Alock - ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;