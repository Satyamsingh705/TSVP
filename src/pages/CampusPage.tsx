import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import FacilitiesSection from '../components/campus/FacilitiesSection';
import GallerySection from '../components/campus/GallerySection';

const CampusPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Campus - Takshasila Vidyapeeth';
  }, []);
  
  return (
    <>
      <PageHeader 
        title="Our Campus" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Campus', path: '/campus' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8471826/pexels-photo-8471826.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <FacilitiesSection />
      <GallerySection />
    </>
  );
};

export default CampusPage;