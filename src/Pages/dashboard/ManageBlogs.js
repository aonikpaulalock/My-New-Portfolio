import React from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../Styles/dashboard/quil.css"
import { useAddBlogsMutation } from '../../redux/features/dashboard/blogs/blogsApi';
import { toast } from 'react-toastify';
const ManageBlogs = () => {
  const [addBlogs, { isLoading }] = useAddBlogsMutation()
  const { register, handleSubmit, setValue, reset, watch } = useForm();
  const content = watch('content');

  const onSubmit = async (data) => {
    const toastId = toast.loading("Please wait...");
    const blogData = {
      title: data.title,
      content: data.content,
    };

    try {
      const res = await addBlogs(blogData);
      if (res?.data?.success) {
        toast.update(toastId, {
          render: res?.data?.message,
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
        });
        reset();
      } else {
        toast.update(toastId, {
          render: "Failed to add blog",
          type: toast.TYPE.ERROR,
          isLoading: false,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: error?.message,
        type: toast.TYPE.SUCCESS,
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const handleEditorChange = (value) => {
    setValue('content', value);
  };
  return (
    <div class="parent-container p-5">
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="input-feild shadow mb-4" {...register('title', { required: true })} placeholder="Enter blog title" aria-label="Title" />
                  <ReactQuill
                    className="quill-editor shadow mb-4"
                    value={content || ''}
                    onChange={handleEditorChange}
                    placeholder="Write your blog content here..."
                  />
                  <button className="dashboard-button" type="submit" disabled={!content || isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
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
