import React from 'react';
import Marquee from 'react-fast-marquee';
import "../../Pages/Styles/Skills.css";
import { useGetAllSkillsQuery } from '../../redux/features/dashboard/skills/skillsApi';

const Skills = () => {
  const { data: skills, isLoading } = useGetAllSkillsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="skills-container" id="skills">
      <div className="container mt-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay="300"
      >
        <div className="after-line skills-line">
          <h4 className="about-main-head">MY SKILLS</h4>
        </div>
        <h3 className="skills-main-heading mb-4">My extensive list of skills</h3>
        <Marquee
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          play={true}
          spreed={10}
          direction="left"
          className='skills-marquee'
        >
          {skills?.data?.map((skill) => (
            <div className="skill-card" key={skill._id}>
              <div className="skills-card-1">
                <div className="services-image">
                  <img src={skill.img} alt={skill.name} className="img-fluid p-3 rounded-full" />
                </div>
                <h2 className="services-main-heading">{skill?.name}</h2>
                <p className="services-sub-heading">{skill.description}</p>
                <h1 className="skill-rate"> </h1>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
