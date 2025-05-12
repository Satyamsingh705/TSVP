import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ChevronRight } from 'lucide-react';

const programmes = [
  {
    id: 1,
    title: 'Primary School',
    grades: 'Grades 1-5',
    description: 'Building strong foundations through engaging, activity-based learning.',
    icon: <BookOpen size={40} className="text-accent" />,
    link: '/academics#primary'
  },
  {
    id: 2,
    title: 'Middle School',
    grades: 'Grades 6-8',
    description: 'Fostering critical thinking and comprehensive development.',
    icon: <Users size={40} className="text-accent" />,
    link: '/academics#middle'
  },
  {
    id: 3,
    title: 'High School',
    grades: 'Grades 9-10',
    description: 'Preparing students for academic excellence and future success.',
    icon: <Award size={40} className="text-accent" />,
    link: '/academics#high'
  }
];

const ProgrammesSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            PROGRAMMES
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive academic programmes are designed to nurture intellectual curiosity, creativity, and character development at every stage of learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programmes.map(program => (
            <div key={program.id} className="hover-card bg-white rounded-xl p-8">
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-accent font-medium mb-4">{program.grades}</p>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <Link 
                to={program.link}
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Learn More <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/academics" 
            className="btn btn-primary inline-flex items-center text-lg"
          >
            Explore All Programmes <ChevronRight size={24} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;