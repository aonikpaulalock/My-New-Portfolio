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
                    <h4 className="about-main-head">MY PORTFOLIO</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Take a look at the latest projects I've done</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-1 mb-sm-5 mb-0">
                  <div className="card-container">
                    <div className="button-container">
                      <a
                        href="https://github.com/aonikpaulalock/Inventory-Management-Projects"
                        className="button-clientServer me-4"
                        as={Link}
                        target="_blank"
                        rel="noreferrer">
                        Client
                      </a>
                      <a
                        href="https://github.com/aonikpaulalock/Inventory-Management-Project-Server"
                        className="button-clientServer"
                        as={Link}
                        target="_blank"
                        rel="noreferrer">
                        Server
                      </a>
                    </div>
                    <div className="image-top">
                      <img src={image1} alt="" className="img-thumbnail" />
                    </div>
                    <h1 className="project-heading">Inventory Management Website</h1>
                    <a
                      href="https://full-stack-project-1-4c4f8.web.app/"
                      className="preview"
                      as={Link}
                      target="_blank"
                      rel="noreferrer">
                      Preview
                      <Icon icon="akar-icons:arrow-up-right" className="preview-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row gap-5">
              <div className="col-lg-12">
                <div className="project-1">
                  <div className="card-container">
                    <div className="button-container">
                      <a
                        href="https://github.com/aonikpaulalock/Manufacturer-Website-Client"
                        className="button-clientServer me-4"
                        as={Link}
                        target="_blank"
                        rel="noreferrer">
                        Client
                      </a>
                      <a
                        href="https://github.com/aonikpaulalock/Manu-project-server"
                        className="button-clientServer"
                        as={Link}
                        target="_blank"
                        rel="noreferrer">
                        Server
                      </a>
                    </div>
                    <div className="image-top">
                      <img src={image2} alt="" className="img-thumbnail" />
                    </div>
                    <h1 className="project-heading">Manufacturer Management Website</h1>
                    <a
                      href="https://full-stack-project-2.web.app/"
                      className="preview"
                      as={Link}
                      target="_blank"
                      rel="noreferrer">
                      Preview
                      <Icon icon="akar-icons:arrow-up-right" className="preview-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-1">
                  <div className="card-container">
                    <div className="button-container">
                      <a
                        href="https://github.com/aonikpaulalock/Fitnes-Projects"
                        className="button-clientServer me-4"
                        as={Link}
                        target="_blank"
                        rel="noreferrer">
                        Client
                      </a>
                      <a
                        href="https://github.com/aonikpaulalock/Fitness-Projects-server"
                        className="button-clientServer"
                        as={Link}
                        target="_blank"
                        rel="noreferrer">
                        Server
                      </a>
                    </div>
                    <div className="image-top">
                      <img src={image3} alt="" className="img-thumbnail" />
                    </div>
                    <h1 className="project-heading">Fitness Club Multipage Website</h1>
                    <a
                      href="https://sunny-nasturtium-f11e5e.netlify.app/"
                      className="preview"
                      as={Link}
                      target="_blank"
                      rel="noreferrer">
                      Preview
                      <Icon icon="akar-icons:arrow-up-right" className="preview-icon" />
                    </a>
                  </div>
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