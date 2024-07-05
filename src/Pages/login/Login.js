
// import { Form } from 'react-bootstrap';
// import { FaUser, FaLock, FaEnvelope, FaComment } from 'react-icons/fa';
// import "../Styles/Login.css"
// import { Link } from 'react-router-dom';
// const Login = () => {
//   return (
//     <div className='contact-form'>
//       <div className='input-field-design'>
//         <div className="container my-5">
//           <div className="row d-flex justify-content-center align-items-center">
//             <div className="col-md-6 order-2 order-md-1 pt-lg-5 pt-0 ">
//               <div className='login-form-container'>
//                 <div className="contact-form-container">
//                   <h2 className="form-title">Login</h2>
//                   <Form>
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
//                     <Form.Group className="input-group">
//                       <div className="input-icon">
//                         <FaLock />
//                       </div>
//                       <input
//                         className="input-field w-100"
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         required
//                       />
//                     </Form.Group>
//                     <button type="submit" className="contact-submit-button">Login</button>
//                     <div className='text-center'>
//                       <h5 className="link-auth">Don't have an account?
//                         <Link to="/register" className="toggle-form"> Sign up</Link>
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

// export default Login;

import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { FaLock, FaEnvelope} from 'react-icons/fa';
import "../Styles/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { verifyToken } from '../../utils/verifyToken';
import { useLoginMutation } from '../../redux/features/auth/login/loginApi';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/auth/login/loginSlice';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [userLogin, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await userLogin(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged in", { duration: 2000 });
      navigate(`/`);
    } catch (error) {
      toast.error(error.message);
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
                  <h2 className="form-title">Login</h2>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="input-group">
                      <div className="input-icon">
                        <FaEnvelope />
                      </div>
                      <input
                        className="input-field w-100"
                        type="email"
                        placeholder="Enter Email"
                        {...register("email", { required: "Email is required" })}
                        autoComplete="off"
                      />
                      {errors.email && <span>{errors.email.message}</span>}
                    </Form.Group>
                    <Form.Group className="input-group">
                      <div className="input-icon">
                        <FaLock />
                      </div>
                      <input
                        className="input-field w-100"
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                      />
                      {errors.password && <span>{errors.password.message}</span>}
                    </Form.Group>
                    <button type="submit" className="contact-submit-button" disabled={isLoading}>
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                    <div className='text-center'>
                      <h5 className="link-auth">Don't have an account?
                        <Link to="/register" className="toggle-form"> Sign up</Link>
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

export default Login;

