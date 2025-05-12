import React from 'react';
import { BookOpen, Users, Award, Building, Lightbulb, Microscope } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <BookOpen size={40} className="text-primary" />,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum is designed to develop critical thinking, creativity, and problem-solving skills across all subjects.'
  },
  {
    id: 2,
    icon: <Users size={40} className="text-primary" />,
    title: 'Experienced Faculty',
    description: 'Our dedicated teachers are experts in their fields and committed to bringing out the best in every student.'
  },
  {
    id: 3,
    icon: <Award size={40} className="text-primary" />,
    title: 'Academic Excellence',
    description: 'We maintain high academic standards and consistently achieve outstanding results in board examinations.'
  },
  {
    id: 4,
    icon: <Building size={40} className="text-primary" />,
    title: 'Modern Infrastructure',
    description: 'Our campus features well-equipped classrooms, laboratories, library, and sports facilities.'
  },
  {
    id: 5,
    icon: <Lightbulb size={40} className="text-primary" />,
    title: 'Holistic Development',
    description: 'We focus on developing intellectual, physical, emotional, and social skills through various activities.'
  },
  {
    id: 6,
    icon: <Microscope size={40} className="text-primary" />,
    title: 'Innovative Learning',
    description: 'We incorporate modern teaching methodologies and technology to make learning engaging and effective.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-primary">Takshasila Vidyapeeth</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide a nurturing environment where students can excel academically and develop into well-rounded individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div 
              key={feature.id} 
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;