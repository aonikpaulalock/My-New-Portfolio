import { useGetAllSkillsQuery } from "../../redux/features/dashboard/skills/skillsApi";
import Header from "../Shared/Header";

const AllSkills = () => {
  const { data: skills, isLoading } = useGetAllSkillsQuery();
  return (
    <>
      <Header />
      <div className="all-projects-container">
        <div className="container">
          <div className="row"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2500"
          >
            <div className="col-lg-12">
              <div className="skills-heding"
              >
                <div className="after-line skills-line">
                  <h4 className="about-main-head">MY ALL PORTFOLIO</h4>
                </div>
                <h3 className="skills-main-heading py-2">Take a look at the latest projects I've done</h3>
              </div>
            </div>
            {
              skills?.data?.map(skill =>
                <div className="col-lg-4" key={skill?._id}>
                  <div className="all-skill-card" key={skill._id}>
                    <div className="all-skills-card-1">
                      <div className="services-image">
                        <img src={skill.img} alt={skill.name} className="img-fluid p-3 rounded-full" />
                      </div>
                      <h2 className="services-main-heading">{skill?.name}</h2>
                      <p className="services-sub-heading">{skill.description}</p>
                      <h1 className="skill-rate"> </h1>
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

export default AllSkills;