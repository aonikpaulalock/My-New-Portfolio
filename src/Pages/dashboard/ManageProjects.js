import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddProjectsMutation } from '../../redux/features/dashboard/projects/projectApi';
import { toast } from 'react-toastify';
import { uploadImageToImageBB } from '../../utils/imageUpload';

const ManageProjects = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addProject, { isLoading }] = useAddProjectsMutation()

  const onSubmit = async (data) => {
    const toastId = toast.loading("Please wait...");
    try {
      const imageUrl = await uploadImageToImageBB(data.projectImage[0]);
      const projectData = {
        ...data,
        projectImage: imageUrl
      }
      const res = await addProject(projectData);
      if (res.data.success) {
        toast.update(toastId, {
          render: res?.data?.message,
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
        });
        reset();
      }

    } catch (error) {
      toast.update(toastId, {
        render: error?.message,
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 2000,
      });
    }
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
                    <h4 className="about-main-head">PROJECTS</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Add leverage my projects</h3>
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
                  <input
                    className="input-feild shadow mb-4"
                    name="title"
                    type="text"
                    placeholder="Enter project title"
                    {...register('title', { required: true })}
                    aria-label="Project Title"
                  />
                  <input
                    className="input-feild shadow mb-4"
                    name="client"
                    type="url"
                    placeholder="Enter client URL"
                    {...register('client', { required: true })}
                    aria-label="Client URL"
                  />
                  <input
                    className="input-feild shadow mb-4"
                    name="server"
                    type="url"
                    placeholder="Enter server URL"
                    {...register('server', { required: true })}
                    aria-label="Server URL"
                  />
                  <input
                    className="input-feild shadow mb-4"
                    name="preview"
                    type="url"
                    placeholder="Enter preview URL"
                    {...register('preview', { required: true })}
                    aria-label="Preview URL"
                  />
                  <input
                    className="input-feild shadow mb-4 cursor-pointer"
                    name="projectImage"
                    type="file"
                    accept="image/*"
                    {...register('projectImage', { required: true })}
                    aria-label="Project Image"
                  />
                  <button className="dashboard-button" type="submit"
                    disabled={isLoading}
                  >
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

export default ManageProjects;
