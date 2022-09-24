import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import "../../Pages/Styles/Skills.css"
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("Skills.json")
      .then(res => res.json())
      .then(data => {
        setSkills(data)
      })
  }, [])
  return (
    <div className="skills-container">
      <div className="container mt-5">
        <div className="after-line skills-line">
          <h4 className="about-main-head">MY SKILLS</h4>
        </div>
        <h3 className="skills-main-heading mb-4">My extensive list of skills</h3>
        <div className="row">
          <div className="skillsContainer">
            <div className="skill--scroll">
              <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {skills.map((skill) => (
                  <div className="skill--box" key={skill.id}>
                    <div className="skils-image">
                      <img src={skill.img} alt={skill}  className="img-thumnail shadow rounded-lg p-5"/>
                    </div>
                    <h3>
                      {skill.skill}
                    </h3>
                    <h1 className="skill-rate"></h1>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;