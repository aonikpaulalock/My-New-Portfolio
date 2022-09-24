import React from 'react';
import Header from '../Shared/Header';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
};

export default Home;