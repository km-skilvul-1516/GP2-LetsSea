import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import SectionTiga from '../SectionTiga';
import SectionEmpat from '../SectionEmpat';
import SectionLima from '../SectionLima';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <SectionTiga />
      <SectionEmpat />
      <SectionLima />
      <Footer />
    </>
  );
}

export default Home;
