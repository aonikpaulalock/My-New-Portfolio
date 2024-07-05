// import { Form } from 'react-bootstrap';
// import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// const Register = () => {
//   return (
//     <div className='contact-form'>
//       <div className='input-field-design'>
//         <div className="container my-5">
//           <div className="row d-flex justify-content-center align-items-center">
//             <div className="col-md-6 order-2 order-md-1 pt-lg-5 pt-0 ">
//               <div className='login-form-container'>
//                 <div className="contact-form-container">
//                   <h2 className="form-title">Signup</h2>
//                   <Form>
//                     <Form.Group className="input-group">
//                       <div className="input-icon">
//                         <FaUser />
//                       </div>
//                       <input
//                         className="input-field w-100"
//                         type="text"
//                         name="name"
//                         placeholder="Enter Your Name"
//                         required
//                         autoComplete="off"
//                       />
//                     </Form.Group>
//                     <Form.Group className="input-group">
//                       <div className="input-icon">
//                         <FaEnvelope />
//                       </div>
//                       <input
//                         className="input-field w-100"
//                         type="email"
//                         name="email"
//                         placeholder="Enter Email"
//                         required
//                         autoComplete="off"
//                       />
//                     </Form.Group>
//                     <div className='d-md-flex'>
//                       <Form.Group className="input-group me-3">
//                         <div className="input-icon">
//                           <FaLock />
//                         </div>
//                         <input
//                           className="input-field w-100"
//                           type="password"
//                           name="password"
//                           placeholder="Password"
//                           required
//                         />
//                       </Form.Group>
//                       <Form.Group className="input-group">
//                         <div className="input-icon">
//                           <FaLock />
//                         </div>
//                         <input
//                           className="input-field w-100"
//                           type="password"
//                           name="confirmPassword"
//                           placeholder="Confirm Password"
//                           required
//                         />
//                       </Form.Group>
//                     </div>
//                     <button type="submit" className="contact-submit-button">Sign Up</button>
//                     <div className='text-center'>
//                       <h5 className="link-auth">Already have an account?
//                         <Link to="/login" className="toggle-form"> Sign In</Link>
//                       </h5>
//                     </div>
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div >
//       </div>
//     </div>
//   )
// };

// export default Register;

// import { useForm } from "react-hook-form";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { Form } from "react-bootstrap"; // assuming you are using Bootstrap Form components
// import { Link } from "react-router-dom"; // assuming you are using React Router for navigation
// import { useAppDispatch } from "../../redux/hooks";

// const Register = () => {
//   const { register, handleSubmit, formState: { errors },watch } = useForm();
//   const password = watch("password");
//   const dispatch = useAppDispatch();

//   const onSubmit = (data) => {
//     const { name, email, password } = data;
//   };

//   return (
//     <div className='contact-form'>
//       <div className='input-field-design'>
//         <div className="container my-5">
//           <div className="row d-flex justify-content-center align-items-center">
//             <div className="col-md-6 order-2 order-md-1 pt-lg-5 pt-0 ">
//               <div className='login-form-container'>
//                 <div className="contact-form-container">
//                   <h2 className="form-title">Signup</h2>
//                   <Form onSubmit={handleSubmit(onSubmit)}>
//                     <Form.Group className="input-group">
//                       <div className="input-icon">
//                         <FaUser />
//                       </div>
//                       <input
//                         {...register("name", { required: "Name is required" })}
//                         className="input-field w-100"
//                         type="text"
//                         placeholder="Enter Your Name"
//                         autoComplete="off"
//                       />
//                       {errors.name && <span className="error-message">{errors.name.message}</span>}
//                     </Form.Group>
//                     <Form.Group className="input-group">
//                       <div className="input-icon">
//                         <FaEnvelope />
//                       </div>
//                       <input
//                         {...register("email", {
//                           required: "Email is required",
//                           pattern: {
//                             value: /\S+@\S+\.\S+/,
//                             message: "Invalid email address",
//                           },
//                         })}
//                         className="input-field w-100"
//                         type="email"
//                         placeholder="Enter Email"
//                         autoComplete="off"
//                       />
//                       {errors.email && <span className="error-message">{errors.email.message}</span>}
//                     </Form.Group>
//                     <div className='d-md-flex'>
//                       <Form.Group className="input-group me-3">
//                         <div className="input-icon">
//                           <FaLock />
//                         </div>
//                         <input
//                           {...register("password", { required: "Password is required" })}
//                           className="input-field w-100"
//                           type="password"
//                           placeholder="Password"
//                         />
//                         {errors.password && <span className="error-message">{errors.password.message}</span>}
//                       </Form.Group>
//                       <Form.Group className="input-group">
//                         <div className="input-icon">
//                           <FaLock />
//                         </div>
//                         <input
//                           {...register("confirmPassword", {
//                             required: "Please confirm your password",
//                             validate: (value) =>
//                               value === password || "The passwords do not match",
//                           })}
//                           className="input-field w-100"
//                           type="password"
//                           placeholder="Confirm Password"
//                         />
//                         {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
//                       </Form.Group>
//                     </div>
//                     <button type="submit" className="contact-submit-button">Sign Up</button>
//                     <div className='text-center'>
//                       <h5 className="link-auth">Already have an account?
//                         <Link to="/login" className="toggle-form"> Sign In</Link>
//                       </h5>
//                     </div>
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div >
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../redux/features/auth/register/regsiterApi";
import { setRegister } from "../../redux/features/auth/register/registerSlice";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const password = watch("password"); 

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        username: data.name,
        email: data.email,
        password: data.password,
      };

      dispatch(setRegister(userInfo));

      const res = await registerUser(userInfo);

      if (res.error) {
        toast.error(res.error.message, {
          duration: 2000,
        });
      } else {
        toast.success("Registration successful!", {
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!", {duration: 2000 });
    }
  };

  return (
    <div className='contact-form'>
      <div className='input-field-design'>
        <div className="container my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 order-2 order-md-1 pt-lg-5 pt-0 ">
              <div className='login-form-container'>
                <div className="contact-form-container">
                  <h2 className="form-title">Signup</h2>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="input-group">
                      <div className="input-icon">
                        <FaUser />
                      </div>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="input-field w-100"
                        type="text"
                        placeholder="Enter Your Name"
                        autoComplete="off"
                      />
                      {errors.name && <span className="error-message">{errors.name.message}</span>}
                    </Form.Group>
                    <Form.Group className="input-group">
                      <div className="input-icon">
                        <FaEnvelope />
                      </div>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid email address",
                          },
                        })}
                        className="input-field w-100"
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                      />
                      {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </Form.Group>
                    <div className='d-md-flex'>
                      <Form.Group className="input-group me-3">
                        <div className="input-icon">
                          <FaLock />
                        </div>
                        <input
                          {...register("password", { required: "Password is required" })}
                          className="input-field w-100"
                          type="password"
                          placeholder="Password"
                        />
                        {errors.password && <span className="error-message">{errors.password.message}</span>}
                      </Form.Group>
                      <Form.Group className="input-group">
                        <div className="input-icon">
                          <FaLock />
                        </div>
                        <input
                          {...register("confirmPassword", {
                            validate: (value) =>
                              value === password || "The passwords do not match",
                          })}
                          className="input-field w-100"
                          type="password"
                          placeholder="Confirm Password"
                        />
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
                      </Form.Group>
                    </div>
                    <button type="submit" className="contact-submit-button" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Sign Up"}
                    </button>
                    <div className='text-center'>
                      <h5 className="link-auth">Already have an account?
                        <Link to="/login" className="toggle-form"> Sign In</Link>
                      </h5>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>
  );
};

export default Register;

