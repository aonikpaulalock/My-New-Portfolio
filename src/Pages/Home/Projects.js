import React from 'react';
import "../../Pages/Styles/Projects.css"
import { Icon } from '@iconify/react';
import image1 from "../../Asset/Projects/Inventory.png"
import image2 from "../../Asset/Projects/Manufacturer-1.png"
import image3 from "../../Asset/Projects/Fitness-1.png"
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row gap-5">
              <div className="col-lg-12">
                <div className="skills-heding">
                  <div className="after-line skills-line">
                    <h4 className="about-main-head">MY SKILLS</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Take a look at the latest projects I've done</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-1">
                  <div className="card-container">
                    <div className="button-container">
                      <button className="button-clientServer">Client</button>
                      <button className="button-clientServer ms-4">Server</button>
                    </div>
                    <div className="image-top">
                      <img src={image1} alt="" className="p-5 img-thumbnail" />
                    </div>
                    <h1 className="project-heading">Car Deal Management Website</h1>
                    <Link to="">
                      Preview
                      <Icon icon="akar-icons:arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row gap-5">
              <div className="col-lg-12">
                <div className="project-1">

                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-1">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;