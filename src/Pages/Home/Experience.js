import React from 'react';
import "../Styles/Experience.css"
const Experience = () => {
  return (
    <div className='experince-container'>
      <div className="container mt-5">

        <div className="row">
          <div className="experience-heading">
            <h4 className="experience-title">EDUCATION & EXPERINCE</h4>
            <p className='experience-des'>
              Take a look at my education & experience I've done
            </p>
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4 section-title">EDUCATION</h2>
            <div className="timeline-item mb-4">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5 className="timeline-title">Bachelor Degree</h5>
                <p className="timeline-duration">2020 - Present</p>
                <h6 className="timeline-subtitle">Moulvibazar Govt Collage, Moulvobazar</h6>
                <p className='timeline-des'>Currently pursuing a Bachelor's degree in Economics at Moulvibazar Govt Collage, I am actively engaged in a dynamic academic program focused on developing analytical thinking and practical problem-solving skills. This journey not only deepens my understanding of economic theories and principles.</p>
              </div>
            </div>
            <div className="timeline-item mb-4">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5 className="timeline-title">Inter Mediate Degree</h5>
                <p className="timeline-duration">2018 - 2020</p>
                <h6 className="timeline-subtitle">Moulvibazar Govt College, Pabna</h6>
                <p className='timeline-des'>At Moulvibazar Govt Collage, I thrived in an enriching academic atmosphere, supported by excellent faculty and resources, which helped me lay a strong foundation for my higher education journey.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4 section-title">EXPERIENCE</h2>
            <div className="timeline-item mb-4">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5 className="timeline-title">React Js  Developer (Intern)</h5>
                <p className="timeline-duration">2022 - 2023</p>
                <h6 className="timeline-subtitle">XcitEducation Worldwide, India</h6>
                <p className='timeline-des'>As a developer at XcitEducation Worldwide since 2023, I have contributed to diverse projects, leveraging my skills in both frontend and backend development. Collaborating with talented teams, I have tackled challenges, implemented innovative solutions, and continuously honed my expertise to deliver high-quality, scalable software solutions</p>
              </div>
            </div>
            <div className="timeline-item mb-4">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5 className="timeline-title">Next Level Web Development</h5>
                <p className="timeline-duration">2022 - 2023</p>
                <h6 className="timeline-subtitle">Programming Hero</h6>
                <p className='timeline-des'>I completed the Next Level Web Development Course from Programming Hero, guided by interactive lessons and real-world projects, solidifying my expertise in web development and preparing me for professional challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Experience;
