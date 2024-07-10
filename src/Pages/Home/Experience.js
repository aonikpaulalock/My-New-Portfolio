import React from 'react';
import "../Styles/Experience.css"
import { useGetAllExperinceQuery } from '../../redux/features/dashboard/experince/experinceApi';
import Loading from '../../components/Loading';
import ExperinceCard from '../../components/ExperinceCard';
const Experience = () => {
  const { data: experinces, isLoading } = useGetAllExperinceQuery();
  return (
    <div className='experince-container'>
      <div className="container mt-5"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
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
            {
              isLoading ? <Loading /> :
                experinces?.data?.map((experince) => <ExperinceCard key={experince?._id} experince={experince} />)
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default Experience;
