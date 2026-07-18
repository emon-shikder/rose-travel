import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import Services from '../../components/home/Services';
import Destinations from '../../components/home/Destinations';
import FeaturedTours from '../../components/home/FeaturedTours';
import Testimonials from '../../components/home/Testimonials';
import Newsletter from '../../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Destinations />
      <FeaturedTours />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
