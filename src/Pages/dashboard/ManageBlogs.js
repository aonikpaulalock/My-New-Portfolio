import React from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
const ManageBlogs = () => {
  const { register, handleSubmit, setValue, reset, watch } = useForm();
  const content = watch('content');

  const onSubmit = async (data) => {
    const blogData = {
      title: data.title,
      content: data.content,
    };

    // try {
    //   const response = await fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(blogData),
    //   });

    //   const result = await response.json();
    //   if (result.success) {
    //     alert('Blog added successfully!');
    //     reset();
    //   } else {
    //     alert('Failed to add blog');
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const handleEditorChange = (value) => {
    setValue('content', value);
  };
  return (
    <div class="parent-container">
      <div className='dashboard-input-container'>
        <div className="" id="contact">
          <div className="container"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <div className="row">
              <div className="col-md-6 mb-sm-0 mb-5">
                <div>
                  <div className="after-line skills-line">
                    <h4 className="about-main-head">BLOGS</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Add leverage my blogs</h3>
                </div>
              </div>
              <div className="col-md-6">
                {/* <form role="search">
                <input class="input-feild shadow mb-4" name="name" type="search" placeholder="Enter company name" aria-label="Search" />
                <input class="input-feild shadow mb-4" type="search" name="user_email" placeholder="Enter position" aria-label="Search" />
                <input class="input-feild shadow mb-4" type="search" name="number" placeholder="Enter duration" aria-label="Search" />
                <button class="dashboard-button" type="submit">
                  Submit
                </button>
              </form> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="input-feild shadow mb-4" {...register('title', { required: true })} placeholder="Enter blog title" aria-label="Title" />
                  <ReactQuill className="shadow mb-4" value={content || ''} onChange={handleEditorChange} />
                  <button className="dashboard-button" type="submit" disabled={!content}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
