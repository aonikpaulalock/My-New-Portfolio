import React from 'react';
import "../../Pages/Styles/Services.css"
import { Icon } from '@iconify/react';
const Services = () => {
  return (
    <div className="services-container">
      <div className="container">
        <div className="col-md-6">
          <div className="after-line skills-line">
            <h4 className="about-main-head">SERVICES</h4>
          </div>
          <h3 className="skills-main-heading py-4">Take a look at the latest projects I've done</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="services-card-1">
              <div className="services-image">
                <Icon icon="bx:code-block" className="coder-icon" />
              </div>
              <h2 className="services-main-heading">Development</h2>
              <p className="services-sub-heading">Excepteur sint occaecat cupidatat non proident ame.</p>
              <h1 className="skill-rate"> </h1>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6">
            <div className="services-card-2">
              <div className="services-image">
              <Icon icon="ic:baseline-design-services" className="coder-icon"  />
              </div>
              <h2 className="services-main-heading">Web Design</h2>
              <p className="services-sub-heading">Excepteur sint occaecat cupidatat non proident ame.</p>
              <h1 className="skill-rate"> </h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="services-card-3">
              <div className="services-image">
              <Icon icon="ic:sharp-support-agent" className="coder-icon"/>
              </div>
              <h2 className="services-main-heading">Support</h2>
              <p className="services-sub-heading">Excepteur sint occaecat cupidatat non proident ame.</p>
              <h1 className="skill-rate"> </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;