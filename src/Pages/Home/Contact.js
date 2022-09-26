import React from 'react';
import "../../Pages/Styles/Contact.css"
import { Icon } from '@iconify/react';
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className="after-line skills-line">
                <h4 className="about-main-head">CONTACT ME</h4>
              </div>
              <h3 className="skills-main-heading py-4">Interested in working together ? 
                Let's talk </h3>
            </div>
          </div>
          <div className="col-md-6">
            <form role="search">
              <input class="input-feild shadow" type="search" placeholder="Your Name" aria-label="Search" />
              <input class="input-feild shadow my-4" type="search" placeholder="Your Email" aria-label="Search" />
              <textarea rows="6" class="input-feild shadow" type="search" placeholder="Projects Details" aria-label="Search" />
              <button class="link-button" type="submit">
                Contact Me
                <Icon icon="akar-icons:arrow-up-right" className="arrow-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;