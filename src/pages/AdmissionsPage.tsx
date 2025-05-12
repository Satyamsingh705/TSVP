import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import AdmissionProcess from '../components/admissions/AdmissionProcess';
import EligibilityCriteria from '../components/admissions/EligibilityCriteria';
import FeeStructure from '../components/admissions/FeeStructure';
import ApplicationForm from '../components/admissions/ApplicationForm';

const AdmissionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Admissions - Takshasila Vidyapeeth';
  }, []);
  
  return (
    <>
      <PageHeader 
        title="Admissions" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Admissions', path: '/admissions' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8471770/pexels-photo-8471770.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <AdmissionProcess />
      <EligibilityCriteria />
      <FeeStructure />
      <ApplicationForm />
    </>
  );
};

export default AdmissionsPage;