import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.pexels.com/photos/8471926/pexels-photo-8471926.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
      <div className="absolute inset-0 bg-primary opacity-90"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Child's Educational Journey With Us</h2>
          <p className="text-lg mb-8">
            Applications for the 2025-26 academic year are now open. 
            Join our community of learners and give your child the gift of quality education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="btn btn-accent text-dark font-semibold">
              Apply for Admission
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-colors">
              Contact Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;