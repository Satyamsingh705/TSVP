import React from 'react';

interface ProgramLevelProps {
  id: string;
  title: string;
  grades: string;
  description: string;
  features: string[];
  subjects: string[];
  activities: string[];
  image: string;
  reversed?: boolean;
}

const ProgramLevel: React.FC<ProgramLevelProps> = ({
  id,
  title,
  grades,
  description,
  features,
  subjects,
  activities,
  image,
  reversed = false
}) => {
  return (
    <section className="section bg-gray-50" id={id}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reversed ? 'order-1 lg:order-2' : ''}>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-xl text-primary mb-6">{grades}</p>
            
            <p className="text-gray-700 mb-6">
              {description}
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Core Subjects</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Activities</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className={reversed ? 'order-2 lg:order-1' : ''}>
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramLevel;