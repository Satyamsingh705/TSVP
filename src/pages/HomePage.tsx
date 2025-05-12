import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import PrincipalMessage from '../components/home/PrincipalMessage';
import ProgrammesSection from '../components/home/ProgrammesSection';
import FeaturesSection from '../components/home/FeaturesSection';
import AboutSection from '../components/home/AboutSection';
import NewsSection from '../components/home/NewsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Takshasila Vidyapeeth - Excellence in Education';
  }, []);
  
  return (
    <>
      <HeroSection />
      <PrincipalMessage />
      <ProgrammesSection />
      <FeaturesSection />
      <AboutSection />
      <NewsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;