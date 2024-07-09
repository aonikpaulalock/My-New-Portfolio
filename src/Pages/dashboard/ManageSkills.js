import React from 'react';
import { useForm } from 'react-hook-form';
import { uploadImageToImageBB } from '../../utils/imageUpload';
import { useAddSkillsMutation } from '../../redux/features/dashboard/skills/skillsApi';
import { toast } from 'react-toastify';
const ManageSkills = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addSkill, { isLoading }] = useAddSkillsMutation()

  const onSubmit = async (data) => {
    const toastId = toast.loading("Please wait...");
    try {
      const imageUrl = await uploadImageToImageBB(data.skillsImage[0]);

      const skillData = {
        ...data,
        skillsImage: imageUrl
      }
      const res = await addSkill(skillData);
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
        render: error.message,
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: 2000,
      });
    }
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
                    <h4 className="about-main-head">SKILLS</h4>
                  </div>
                  <h3 className="skills-main-heading py-4">Add leverage my skills</h3>
                </div>
              </div>
              <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="input-feild shadow mb-4" {...register('name', { required: true })} placeholder="Enter skill name" aria-label="Name" />
                  <textarea
                    className="input-feild shadow mb-4"
                    name="description"
                    placeholder="Enter description"
                    {...register('description', { required: true })}
                    aria-label="Description"
                  />
                  <input className="input-feild shadow mb-4" type="file" {...register('skillsImage', { required: true })} aria-label="Skills Image" />
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

export default ManageSkills;
