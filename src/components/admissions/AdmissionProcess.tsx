import React from 'react';
import { FileText, Calendar, Users, ClipboardCheck, Award, Send } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <FileText size={40} className="text-primary" />,
    title: 'Step 1: Application Form',
    description: 'Complete the online application form or collect a physical form from the school office. Ensure all required information is provided accurately.',
  },
  {
    id: 2,
    icon: <Calendar size={40} className="text-primary" />,
    title: 'Step 2: Schedule Assessment',
    description: 'Once your application is received, we will contact you to schedule an assessment date for your child. The assessment helps us understand your child\'s learning level.',
  },
  {
    id: 3,
    icon: <Users size={40} className="text-primary" />,
    title: 'Step 3: Student & Parent Interview',
    description: 'After the assessment, a meeting with the principal or admission committee will be scheduled to understand your expectations and educational philosophy.',
  },
  {
    id: 4,
    icon: <ClipboardCheck size={40} className="text-primary" />,
    title: 'Step 4: Document Verification',
    description: 'Submit required documents including birth certificate, previous school records, address proof, and passport-sized photographs for verification.',
  },
  {
    id: 5,
    icon: <Award size={40} className="text-primary" />,
    title: 'Step 5: Admission Offer',
    description: 'Successful candidates will receive an admission offer letter. Review the offer carefully and respond within the specified timeframe.',
  },
  {
    id: 6,
    icon: <Send size={40} className="text-primary" />,
    title: 'Step 6: Fee Payment & Enrollment',
    description: 'Complete the admission process by paying the admission fee and submitting the signed enrollment agreement. Your child is now officially a student of Takshasila Vidyapeeth!',
  },
];

const AdmissionProcess: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our admission process is designed to be straightforward and transparent. Follow these steps to enroll your child at Takshasila Vidyapeeth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(step => (
            <div key={step.id} className="card p-6 flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;