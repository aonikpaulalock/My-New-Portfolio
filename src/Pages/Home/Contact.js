import React from 'react';
import "../../Pages/Styles/Contact.css"
import { Icon } from '@iconify/react';
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
const Contact = () => {
  const handleSendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_10c9v08", "template_polt98h", e.target, "HJfOjeb-zdU-nbl5y")
      .then(res => {
        toast.success("Your contact massage sent successfully")
        e.target.reset()
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="contact-container" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-sm-0 mb-5">
            <div>
              <div className="after-line skills-line">
                <h4 className="about-main-head">CONTACT ME</h4>
              </div>
              <h3 className="skills-main-heading py-4">Interested in working together ? 
                Let's talk </h3>
            </div>
          </div>
          <div className="col-md-6">
            <form role="search" onSubmit={handleSendEmail}>
              <input class="input-feild shadow mb-4" name="name" type="search" placeholder="Your Name" aria-label="Search" />
              <input class="input-feild shadow mb-4" type="search" name="user_email" placeholder="Your Email" aria-label="Search" />
              <input class="input-feild shadow mb-4" type="search" name="number" placeholder="Your Contact Number" aria-label="Search" />
              <textarea rows="6" class="input-feild shadow mb-4" name="message" type="search" placeholder="Your Message" aria-label="Search" />
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