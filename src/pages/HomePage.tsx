import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import StepsSection from '../components/sections/StepsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ResourcesSection />
      <StepsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;