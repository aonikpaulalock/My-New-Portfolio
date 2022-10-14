import React from 'react';
import "../../Pages/Styles/About.css"
import Typed from 'react-typed';
const About = () => {
  return (
    <div className="About-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10">
            <div className="about-heading">
              <div className="after-line">
                <h4 className="about-main-head">About me</h4>
              </div>
              <Typed
                strings={[
                  "Hi! I'm Aonik Paul Alock ..."
                ]}
                typeSpeed={100}
                backSpeed={50}
                className="about-sub-head"
                loop
              />
              <p className="about-pera">Always I am ready to prove myself through my work and hard-working individual proficiency in web technologies. To improve myself as a performer, discovering something new every single day is part of being a High-Level Programmer as well as ability to communicate effectively in a team setting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;