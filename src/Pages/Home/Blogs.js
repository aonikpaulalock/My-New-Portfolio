import React from 'react';
import "../../Pages/Styles/Blogs.css"
import image from "../../Asset/Blogs/blogs.png"
import { useGetAllBlogsQuery } from '../../redux/features/dashboard/blogs/blogsApi';
import Loading from '../../components/Loading';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
const Blogs = () => {
  const navigate = useNavigate()
  const { data: blogs, isLoading } = useGetAllBlogsQuery()
  // Limit to six projects
  const displayedBlogs = blogs?.data;
  // Check if data is still loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="Blogs-container" id="blogs">
      <div className="container"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="2500"
      >
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <div>
                <div className="after-line skills-line">
                  <h4 className="about-main-head">BLOG & ARTICLES</h4>
                </div>
                <h3 className="skills-main-heading py-4">Check out my latest articles and tutorials</h3>
              </div>
              {
                !(!displayedBlogs || displayedBlogs?.length === 0) &&
                <button className="resume-button my-3"
                  onClick={() => navigate("/all-blogs")}
                >All blogs
                </button>
              }
            </div>
          </div>
          <div className="col-md-6">
            {
              (!displayedBlogs || displayedBlogs?.length === 0) ?
                <img src={image} alt="" className="img-fluid p-3" /> :
                <Marquee
                  gradient={false}
                  pauseOnHover={true}
                  pauseOnClick={true}
                  play={true}
                  spreed={10}
                  direction="left"
                  className='blogs-marquee'
                >
                  {
                    displayedBlogs?.map(blog => (
                      <div className="blogs-card" key={blog._id}>
                        <div className="blogs-card-1">
                          <h2 className="services-main-heading">{blog?.title}</h2>
                          <p className="services-sub-heading">{blog?.content}</p>
                          <h1 className="skill-rate"> </h1>
                        </div>
                      </div>
                    ))
                  }
                </Marquee>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;