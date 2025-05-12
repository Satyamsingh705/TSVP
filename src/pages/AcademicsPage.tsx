import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import CurriculumOverview from '../components/academics/CurriculumOverview';
import ProgramLevel from '../components/academics/ProgramLevel';
import KeyBenefits from '../components/academics/KeyBenefits';

const primarySchool = {
  id: 'primary',
  title: 'Primary School',
  grades: 'Grades 1-5',
  description: 'In the primary years, we focus on building a strong foundation in core subjects while nurturing curiosity and creativity. Our child-centered approach ensures that learning is engaging, enjoyable, and meaningful for young minds.',
  features: [
    'Activity-based learning approach',
    'Focus on language development and numeracy skills',
    'Introduction to digital literacy through interactive tools',
    'Development of social skills and emotional intelligence',
    'Regular parent-teacher communication and involvement'
  ],
  subjects: [
    'English',
    'Hindi',
    'Mathematics',
    'Environmental Studies',
    'Computer Science',
    'Art & Craft',
    'Physical Education'
  ],
  activities: [
    'Story-telling sessions',
    'Role plays and dramatization',
    'Field trips for experiential learning',
    'Indoor and outdoor games',
    'Music and dance',
    'Annual day performances'
  ],
  image: 'https://images.pexels.com/photos/8405066/pexels-photo-8405066.jpeg?auto=compress&cs=tinysrgb&w=1600'
};

const middleSchool = {
  id: 'middle',
  title: 'Middle School',
  grades: 'Grades 6-8',
  description: 'The middle school years are crucial for intellectual growth and personality development. We offer a rich curriculum that challenges students intellectually while providing opportunities for them to explore their interests and talents.',
  features: [
    'Focus on critical thinking and analytical skills',
    'Introduction to complex concepts in science and mathematics',
    'Emphasis on effective communication skills',
    'Opportunities for leadership development',
    'Career guidance and exploration'
  ],
  subjects: [
    'English',
    'Hindi',
    'Mathematics',
    'Science',
    'Social Studies',
    'Computer Science',
    'Art Education',
    'Physical Education'
  ],
  activities: [
    'Science and math projects',
    'Debates and elocution competitions',
    'Creative writing workshops',
    'Sports tournaments',
    'Cultural events',
    'Educational excursions'
  ],
  image: 'https://images.pexels.com/photos/8617475/pexels-photo-8617475.jpeg?auto=compress&cs=tinysrgb&w=1600',
  reversed: true
};

const highSchool = {
  id: 'high',
  title: 'High School',
  grades: 'Grades 9-10',
  description: 'Our high school program prepares students for board examinations while developing skills necessary for future academic and professional success. We place equal emphasis on academic excellence and holistic development during these crucial years.',
  features: [
    'Rigorous academic preparation for board examinations',
    'Regular mock tests and thorough performance analysis',
    'Specialized coaching for competitive examinations',
    'Career counseling and guidance',
    'Emphasis on practical applications of theoretical knowledge'
  ],
  subjects: [
    'English',
    'Hindi/Sanskrit',
    'Mathematics',
    'Science (Physics, Chemistry, Biology)',
    'Social Science',
    'Information Technology',
    'Health & Physical Education',
    'Art Education'
  ],
  activities: [
    'Science exhibitions',
    'Literary festivals',
    'Leadership workshops',
    'Sports competitions',
    'Community service projects',
    'Educational tours'
  ],
  image: 'https://images.pexels.com/photos/8617757/pexels-photo-8617757.jpeg?auto=compress&cs=tinysrgb&w=1600'
};

const AcademicsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academics - Takshasila Vidyapeeth';
  }, []);
  
  return (
    <>
      <PageHeader 
        title="Academic Programs" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academics', path: '/academics' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8617758/pexels-photo-8617758.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CurriculumOverview />
      <ProgramLevel {...primarySchool} />
      <ProgramLevel {...middleSchool} />
      <ProgramLevel {...highSchool} />
      <KeyBenefits />
    </>
  );
};

export default AcademicsPage;