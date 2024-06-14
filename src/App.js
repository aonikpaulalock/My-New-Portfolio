import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/Home/About';
import Skills from './Pages/Home/Skills';
import Projects from './Pages/Home/Projects';
import Contact from './Pages/Home/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init(
      {
        offset: 200,  // offset (in px) from the original trigger point
        delay: 0,     // delay (in ms) before the animation starts
        duration: 1000, // duration (in ms) of the animation
        easing: 'ease-in-out', // easing function applied to the animation
        once: true,
      }
    );
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/project' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
