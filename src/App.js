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
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
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
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
