import React from 'react';
import { CheckCircle } from 'lucide-react';

const EligibilityCriteria: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Eligibility Criteria</h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Age Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Class 1: Minimum 5.5 years as of 31st March of the admission year</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">For other classes: Appropriate age corresponding to the class applied for</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">For Classes 2-10: Satisfactory performance in previous class and in the entrance assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Proficiency in English, Mathematics, and other core subjects appropriate to the level</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Birth Certificate (original and photocopy)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Report cards from previous school (for Classes 2-10)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Transfer Certificate from previous school (original)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Passport-sized photographs (4 copies)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Address proof (Aadhaar Card, Electricity Bill, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Copy of parent's ID proof</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8363153/pexels-photo-8363153.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Student studying" 
              className="rounded-lg shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary rounded-lg opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;