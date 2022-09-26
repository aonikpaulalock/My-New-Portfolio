import React from 'react';
import "../../Pages/Styles/Blogs.css"
import image from "../../Asset/Blogs/blogs.png"
const Blogs = () => {
  return (
    <div className="Blogs-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <div className="after-line skills-line">
                <h4 className="about-main-head">BLOG & ARTICLES</h4>
              </div>
              <h3 className="skills-main-heading py-4">Check out my latest articles and tutorials</h3>
            </div>
          </div>
          <div className="col-md-6">
            <img src={image} alt="" className="img-fluid p-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;