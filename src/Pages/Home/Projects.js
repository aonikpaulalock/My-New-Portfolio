import React from 'react';
import "../../Pages/Styles/Projects.css"
import { Icon } from '@iconify/react';
import { useGetAllProjectsQuery } from '../../redux/features/dashboard/projects/projectApi';
import Loading from '../../components/Loading';

const Projects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();

  // Check if data is still loading
  if (isLoading) {
    return <Loading/>;
  }

  // Ensure we have data to display
  if (!projects || projects.length === 0) {
    return <div>No projects found.</div>;
  }

  // Limit to six projects
  const displayedProjects = projects?.data?.slice(0, 6);

  return (
    <div className="projects-container" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row gap-3">
              <div className="col-lg-12">
                <div className="skills-heding"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2500"
                >
                  <div className="after-line skills-line">
                    <h4 className="about-main-head">MY PORTFOLIO</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Take a look at the latest projects I've done</h3>
                </div>
              </div>
              {displayedProjects.slice(0, 3).map((project, index) => (
                <div className="col-lg-12" key={index}>
                  <div className={`project-1 mb-sm-5 mb-5`}
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="linear"
                    data-aos-duration={`${1000 + index * 1000}`}
                  >
                    <div className="card-container">
                      <div className="button-container">
                        <a
                          href={project.client}
                          className="button-clientServer me-4"
                          target="_blank"
                          rel="noreferrer">
                          Client
                        </a>
                        <a
                          href={project.server}
                          className="button-clientServer"
                          target="_blank"
                          rel="noreferrer">
                          Server
                        </a>
                      </div>
                      <div className="image-top">
                        <img src={project.projectImage} alt="" className="img-thumbnail" />
                      </div>
                      <h1 className="project-heading">{project.title}</h1>
                      <a
                        href={project.preview}
                        className="preview"
                        target="_blank"
                        rel="noreferrer">
                        Preview
                        <Icon icon="akar-icons:arrow-up-right" className="preview-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row gap-3">
              {displayedProjects.slice(3, 6).map((project, index) => (
                <div className="col-lg-12" key={index}>
                  <div className={`project-1 mb-sm-5 mb-5`}
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="linear"
                    data-aos-duration={`${1000 + index * 1000}`}
                  >
                    <div className="card-container">
                      <div className="button-container">
                        <a
                          href={project.client}
                          className="button-clientServer me-4"
                          target="_blank"
                          rel="noreferrer">
                          Client
                        </a>
                        <a
                          href={project.server}
                          className="button-clientServer"
                          target="_blank"
                          rel="noreferrer">
                          Server
                        </a>
                      </div>
                      <div className="image-top">
                        <img src={project.projectImage} alt="" className="img-thumbnail" />
                      </div>
                      <h1 className="project-heading">{project.title}</h1>
                      <a
                        href={project.preview}
                        className="preview"
                        target="_blank"
                        rel="noreferrer">
                        Preview
                        <Icon icon="akar-icons:arrow-up-right" className="preview-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
