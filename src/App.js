import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/Home/About';
import Skills from './Pages/Home/Skills';
import Projects from './Pages/Home/Projects';
import Contact from './Pages/Home/Contact';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import DashboardLayout from './Pages/dashboard/DashboardLayout';
import ManageExperience from './Pages/dashboard/ManageExperience';
import ManageProjects from './Pages/dashboard/ManageProjects';
import ManageBlogs from './Pages/dashboard/ManageBlogs';
import ManageSkills from './Pages/dashboard/ManageSkills';
import AllProjects from './Pages/Home/AllProjects';
import AllSkills from './Pages/Home/AllSkills';
import AllBlogs from './Pages/Home/AllBlogs';
import ProtectedRoute from './utils/ProtectedRoute';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init(
      {
        offset: 200,
        delay: 0,
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      }
    );

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/project' element={<Projects />}></Route>
        <Route path='/all-projects' element={
          <ProtectedRoute>
            <AllProjects />
          </ProtectedRoute>
        }></Route>
        <Route path='/all-skills' element={<AllSkills />}></Route>
        <Route path='/all-blogs' element={<AllBlogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Navigate to='/dashboard/experience' replace />} />
          <Route path='experience' element={<ManageExperience />} />
          <Route path='projects' element={<ManageProjects />} />
          <Route path='blogs' element={<ManageBlogs />} />
          <Route path='skills' element={<ManageSkills />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
