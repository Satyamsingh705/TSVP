import React from 'react';
import { BookOpen, Monitor, FlaskRound as Flask, Users, Dumbbell, Utensils, Bus, ChevronFirst as FirstAid } from 'lucide-react';

const facilities = [
  {
    id: 1,
    icon: <BookOpen size={40} className="text-primary" />,
    title: 'Library',
    description: 'Our well-stocked library houses over 10,000 books, periodicals, and digital resources to foster a love for reading and research.'
  },
  {
    id: 2,
    icon: <Monitor size={40} className="text-primary" />,
    title: 'Computer Labs',
    description: 'State-of-the-art computer labs with latest hardware and software to develop digital literacy and computational thinking skills.'
  },
  {
    id: 3,
    icon: <Flask size={40} className="text-primary" />,
    title: 'Science Labs',
    description: 'Separate Physics, Chemistry, and Biology labs equipped with modern instruments for conducting experiments and scientific investigations.'
  },
  {
    id: 4,
    icon: <Users size={40} className="text-primary" />,
    title: 'Smart Classrooms',
    description: 'Interactive digital boards, projectors, and audio-visual aids enhance the teaching-learning experience in our classrooms.'
  },
  {
    id: 5,
    icon: <Dumbbell size={40} className="text-primary" />,
    title: 'Sports Facilities',
    description: 'Spacious playgrounds for cricket, football, basketball courts, and indoor games for physical fitness and team building.'
  },
  {
    id: 6,
    icon: <Utensils size={40} className="text-primary" />,
    title: 'Cafeteria',
    description: 'Clean and hygienic cafeteria serving nutritious and balanced meals prepared under strict quality control measures.'
  },
  {
    id: 7,
    icon: <Bus size={40} className="text-primary" />,
    title: 'Transportation',
    description: 'Fleet of buses covering major routes with GPS tracking for safe and convenient transportation of students.'
  },
  {
    id: 8,
    icon: <FirstAid size={40} className="text-primary" />,
    title: 'Medical Facilities',
    description: 'Well-equipped medical room with a qualified nurse to handle emergencies and provide first aid.'
  }
];

const FacilitiesSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide excellent infrastructure and facilities to create an optimal learning environment for our students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map(facility => (
            <div 
              key={facility.id} 
              className="card p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;