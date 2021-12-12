import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';

const Home = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    <ContactBanner />
  </div>
);

export default Home;
