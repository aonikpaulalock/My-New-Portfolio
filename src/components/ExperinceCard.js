import moment from "moment";
const ExperinceCard = ({experince}) => {
  return (
    <div className="timeline-item mb-4" key={experince?._id}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h5 className="timeline-title">{experince?.title} (Intern)</h5>
        <p className="timeline-duration">   {moment(experince?.startDate).format("L")} - {moment(experince?.endDate).format("L")}</p>
        <h6 className="timeline-subtitle">{experince?.company}</h6>
        <p className='timeline-des'>{experince?.description}</p>
      </div>
    </div>
  )
};

export default ExperinceCard;