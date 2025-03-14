import React from 'react';
import Hero from '../Layouts/Hero/Hero';
import About from '../Layouts/About/About';
import Popular from '../Layouts/Popular/Popular';
import Explore from '../Layouts/Explore/Explore';
import Join from '../Layouts/Join/Join';
import Footer from '../Layouts/Footer/Footer';
import TopButton from '../Components/TopButton';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Popular />
      <Explore />
      <Join />
      <Footer />
      <TopButton/>
    </>
  );
};

export default Home;
