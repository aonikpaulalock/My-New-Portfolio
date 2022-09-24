import React from 'react';
import Header from '../Shared/Header';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Blogs/>
      <Contact/>
    </>
  );
};

export default Home;