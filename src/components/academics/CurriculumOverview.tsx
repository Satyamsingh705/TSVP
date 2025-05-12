import React from 'react';
import { BookOpen, FileText, Brain, Award, Target, Users } from 'lucide-react';

const curriculumFeatures = [
  {
    id: 1,
    icon: <BookOpen className="text-primary h-8 w-8" />,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum is aligned with CBSE guidelines while incorporating enrichment activities that foster critical thinking and creativity.'
  },
  {
    id: 2,
    icon: <FileText className="text-primary h-8 w-8" />,
    title: 'Regular Assessments',
    description: 'We conduct regular formative and summative assessments to monitor student progress and provide timely feedback and support.'
  },
  {
    id: 3,
    icon: <Brain className="text-primary h-8 w-8" />,
    title: 'Conceptual Understanding',
    description: 'We focus on developing deep conceptual understanding rather than rote learning, enabling students to apply knowledge to real-world situations.'
  },
  {
    id: 4,
    icon: <Award className="text-primary h-8 w-8" />,
    title: 'Academic Excellence',
    description: 'Our teaching methodologies are designed to help students achieve academic excellence and perform well in board examinations.'
  },
  {
    id: 5,
    icon: <Target className="text-primary h-8 w-8" />,
    title: 'Skill Development',
    description: 'We integrate 21st-century skills like critical thinking, communication, collaboration, and creativity across all subject areas.'
  },
  {
    id: 6,
    icon: <Users className="text-primary h-8 w-8" />,
    title: 'Personalized Attention',
    description: 'We maintain optimal student-teacher ratios to ensure that each student receives personalized attention and support.'
  }
];

const CurriculumOverview: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Approach</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            At Takshasila Vidyapeeth, we believe in providing a balanced education that develops intellectual, physical, emotional, and social abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumFeatures.map(feature => (
            <div key={feature.id} className="card p-6">
              <div className="flex items-start">
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumOverview;