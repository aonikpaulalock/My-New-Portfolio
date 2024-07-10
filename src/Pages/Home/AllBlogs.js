import { useGetAllBlogsQuery } from "../../redux/features/dashboard/blogs/blogsApi";
import Header from "../Shared/Header";

const AllBlogs = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery();
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
                  <h4 className="about-main-head">MY ALL BLOGS & ARTICLES</h4>
                </div>
                <h3 className="skills-main-heading py-2">Check out my latest articles and tutorials</h3>
              </div>
            </div>
            {
              blogs?.data?.map(blog =>
                <div className="col-lg-6" key={blog?._id}>
                  <div className="all-skill-card" key={blog._id}>
                    <div className="all-skills-card-1">
                      <h2 className="services-main-heading">{blog?.title}</h2>
                      <p className="services-sub-heading">{blog?.content}</p>
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

export default AllBlogs;