import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import SchoolHistory from '../components/about/SchoolHistory';
import MissionVision from '../components/about/MissionVision';
import Leadership from '../components/about/Leadership';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Takshasila Vidyapeeth';
  }, []);
  
  return (
    <>
      <PageHeader 
        title="About Us" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <SchoolHistory />
      <MissionVision />
      <Leadership />
    </>
  );
};

export default AboutPage;