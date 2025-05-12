import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - School Information */}
          <div>
            <div className="mb-4">
              <Logo color="white" />
            </div>
            <p className="text-gray-400 mb-6">
              Takshasila Vidyapeeth is committed to providing quality education that fosters academic excellence, character development, and lifelong learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:bottom-0 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:bottom-0 pb-2">
              Our Branches
            </h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-white mb-2">Bakhri (Main Campus)</h5>
                <address className="text-gray-400 not-italic">
                  <div className="flex items-start mb-2">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Takshasila Vidyapeeth, Near Railway Station, Bakhri, Bihar - 851201</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="mr-2 flex-shrink-0" />
                    <span>+91 00000 00000</span>
                  </div>
                </address>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-2">Begusarai Branch</h5>
                <address className="text-gray-400 not-italic">
                  <div className="flex items-start mb-2">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Takshasila Vidyapeeth, College Road, Begusarai, Bihar - 851101</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="mr-2 flex-shrink-0" />
                    <span>+91 00000 00000</span>
                  </div>
                </address>
              </div>
            </div>
          </div>
          
          {/* Column 4 - Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-accent after:left-0 after:bottom-0 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-accent" />
                <a href="mailto:info@takshasilavidyapeeth.edu" className="text-gray-400 hover:text-accent transition-colors">
                  info@takshasilavidyapeeth.edu
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-accent" />
                <a href="tel:+910000000000" className="text-gray-400 hover:text-accent transition-colors">
                  +91 00000 00000
                </a>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mt-8 mb-4">School Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock size={16} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-white">Monday - Saturday</p>
                  <p className="text-gray-400">8:00 AM - 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={16} className="mr-3 text-accent mt-1" />
                <div>
                  <p className="text-white">Admin Office</p>
                  <p className="text-gray-400">8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Takshasila Vidyapeeth. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-accent text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-accent text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-accent text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;