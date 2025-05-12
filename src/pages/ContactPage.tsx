import React, { useEffect, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - Takshasila Vidyapeeth';
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // In a real app, you would send this data to a server
  };
  
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8471889/pexels-photo-8471889.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              
              <p className="text-gray-700 mb-8">
                We'd love to hear from you. Please feel free to contact us with any questions, feedback, or inquiries. Our team is ready to assist you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Our Locations</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Main Campus:</strong> Near Railway Station, Bakhri, Bihar - 851201
                    </p>
                    <p className="text-gray-600">
                      <strong>Begusarai Branch:</strong> College Road, Begusarai, Bihar - 851101
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Main Office:</strong> +91 00000 00000
                    </p>
                    <p className="text-gray-600">
                      <strong>Admissions:</strong> +91 00000 00000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>General Inquiries:</strong> info@takshasilavidyapeeth.edu
                    </p>
                    <p className="text-gray-600">
                      <strong>Admissions:</strong> admissions@takshasilavidyapeeth.edu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Office Hours</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Monday to Friday:</strong> 8:00 AM - 4:30 PM
                    </p>
                    <p className="text-gray-600">
                      <strong>Saturday:</strong> 8:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                    <p className="text-gray-600 mb-6">
                      Your message has been sent successfully. We will get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject*
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select a subject</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="general">General Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="complaint">Complaint</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Map for Bakhri Campus will be embedded here</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Main Campus - Bakhri</h3>
                <p className="text-gray-600">Near Railway Station, Bakhri, Bihar - 851201</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Map for Begusarai Campus will be embedded here</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Begusarai Branch</h3>
                <p className="text-gray-600">College Road, Begusarai, Bihar - 851101</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;