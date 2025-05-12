import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "My child has shown tremendous improvement in both academics and personality after joining Takshasila Vidyapeeth. The teachers are dedicated and provide individual attention to each student.",
    name: "Rajesh Kumar",
    role: "Parent of Class 8 Student",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    content: "The school's focus on both academics and extracurricular activities has helped my daughter develop holistically. The faculty is supportive and encourages students to excel in all areas.",
    name: "Priya Sharma",
    role: "Parent of Class 5 Student",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    content: "I'm impressed by the values and discipline instilled in students at Takshasila Vidyapeeth. The school provides a perfect balance of traditional values and modern education.",
    name: "Anand Singh",
    role: "Parent of Class 10 Student",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents Say</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="text-center">
                  <p className="text-xl md:text-2xl mb-8 italic">"{testimonial.content}"</p>
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-accent">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary-dark hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-primary-dark hover:bg-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;