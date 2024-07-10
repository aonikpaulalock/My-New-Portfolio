import { Icon } from "@iconify/react/dist/iconify.js";
import { useGetAllProjectsQuery } from "../../redux/features/dashboard/projects/projectApi";
import Header from "../Shared/Header";
import Loading from "../../components/Loading";

const AllProjects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();
  return (
    <>
      <Header />
      <div className="all-projects-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="skills-heding"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="2500"
              >
                <div className="after-line skills-line">
                  <h4 className="about-main-head">MY ALL PORTFOLIO</h4>
                </div>
                <h3 className="skills-main-heading py-2">Take a look at the latest projects I've done</h3>
              </div>
            </div>
            {
              isLoading ? <Loading /> :
                projects?.data?.map(project =>
                  <div className="col-lg-6" key={project?._id}>
                    <div className={`project-1 mb-sm-5 mb-5`}
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="linear"
                      data-aos-duration={1000}
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
                )
            }
          </div>
        </div>
      </div>
    </>
  )
};

export default AllProjects;