import React from 'react';
import "../Styles/dashboard/DashboardInput.css"
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAddExperinceMutation } from '../../redux/features/dashboard/experince/experinceApi';
import { toast } from 'react-toastify';
const ManageExperience = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const [addExperince, { isLoading }] = useAddExperinceMutation()

  const onSubmit = async (data) => {
    const toastId = toast.loading("Please wait...");
    try {
      const formattedData = {
        ...data,
        startDate: data.startDate.toISOString().split('T')[0],
        endDate: data.endDate.toISOString().split('T')[0]
      }

      const res = await addExperince(formattedData)
      if (res?.data?.success) {
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
                    <h4 className="about-main-head">EXPERIENCE</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Add leverage my experience</h3>
                </div>
              </div>
              <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="input-feild shadow mb-4"
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    {...register('company', { required: true })}
                    aria-label="Company"
                  />
                  <input
                    className="input-feild shadow mb-4"
                    name="title"
                    type="text"
                    placeholder="Enter position"
                    {...register('title', { required: true })}
                    aria-label="Position"
                  />
                  <textarea
                    className="input-feild shadow mb-4"
                    name="description"
                    placeholder="Enter description"
                    {...register('description', { required: true })}
                    aria-label="Description"
                  />
                  <div className='d-flex'>
                    <Controller
                      control={control}
                      name="startDate"
                      render={({ field }) => (
                        <DatePicker
                          className="input-feild shadow mb-4"
                          placeholderText="Start Date"
                          selected={field.value}
                          onChange={field.onChange}
                          dateFormat="yyyy-MM-dd"
                          aria-label="Start Date"
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="endDate"
                      render={({ field }) => (
                        <DatePicker
                          className="input-feild shadow mb-4 ms-md-2 ms-2"
                          placeholderText="End Date"
                          selected={field.value}
                          onChange={field.onChange}
                          dateFormat="yyyy-MM-dd"
                          aria-label="End Date"
                        />
                      )}
                    />
                  </div>
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

export default ManageExperience;
