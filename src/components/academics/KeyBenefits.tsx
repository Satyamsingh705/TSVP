import React from 'react';

const KeyBenefits: React.FC = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Benefits at Takshasila</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">1:15</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Teacher-Student Ratio</h3>
            <p className="text-gray-300">Personalized attention and guidance for optimal learning outcomes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">95%</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Board Results</h3>
            <p className="text-gray-300">Consistent academic excellence with outstanding board examination results</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">20+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Co-curricular Activities</h3>
            <p className="text-gray-300">Diverse activities to develop talents and interests beyond academics</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold">100%</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualified Faculty</h3>
            <p className="text-gray-300">Experienced teachers with advanced degrees in their respective fields</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;