import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-lg hidden md:block"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-2">
              <span className="text-primary font-medium">About Our School</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Excellence in Education for Over 15 Years</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2005, Takshasila Vidyapeeth has established itself as a premier educational institution in Bihar. 
              We are committed to providing quality education that fosters academic excellence, character development, and lifelong learning.
            </p>
            <p className="text-gray-700 mb-8">
              Our approach combines traditional values with modern teaching methodologies to prepare students for the challenges of the 21st century.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-700">Expert Faculty</span>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-700">Modern Facilities</span>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-700">Holistic Development</span>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-700">Safe Environment</span>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-outline inline-flex items-center">
              Learn More About Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;