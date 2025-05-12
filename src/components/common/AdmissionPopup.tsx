import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const AdmissionPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/8617831/pexels-photo-8617831.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="School building" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold">Admissions Open 2025-26</h3>
            <p className="text-gray-200">Classes I to X</p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Limited Seats Available!</h4>
            <p className="text-gray-600">
              Join Takshasila Vidyapeeth for a transformative educational journey. Apply now to secure your child's future with our comprehensive curriculum and experienced faculty.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-gray-600">Board Results</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link 
              to="/admissions" 
              className="flex-1 btn btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
            <Link 
              to="/contact" 
              className="flex-1 btn btn-outline text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;