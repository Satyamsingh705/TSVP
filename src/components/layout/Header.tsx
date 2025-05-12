import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMegaMenuOpen('');
  };

  const toggleMegaMenu = (menu: string) => {
    if (isMegaMenuOpen === menu) {
      setIsMegaMenuOpen('');
    } else {
      setIsMegaMenuOpen(menu);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-soft' : 'bg-white/90'
    }`}>
     
      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 transform hover:scale-105 transition-transform" onClick={closeMenu}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            
            <div className="relative group">
              <button 
                className="nav-link text-lg flex items-center group"
                onClick={() => toggleMegaMenu('about')}
              >
                About <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className={`absolute left-0 mt-2 w-64 rounded-xl shadow-soft bg-white ring-1 ring-black/5 p-3 space-y-1 transition-all duration-300 transform ${
                isMegaMenuOpen === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <Link 
                  to="/about" 
                  className="block px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link 
                  to="/about#mission-vision" 
                  className="block px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={closeMenu}
                >
                  Mission & Vision
                </Link>
                <Link 
                  to="/about#leadership" 
                  className="block px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={closeMenu}
                >
                  Leadership
                </Link>
              </div>
            </div>
            
            <NavLink to="/academics" className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}>
              Academics
            </NavLink>
            
            <NavLink to="/admissions" className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}>
              Admissions
            </NavLink>
            
            <NavLink to="/campus" className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}>
              Campus
            </NavLink>
            
            <div className="relative group">
              <button 
                className="nav-link text-lg flex items-center group"
                onClick={() => toggleMegaMenu('branches')}
              >
                Branches <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className={`absolute left-0 mt-2 w-56 rounded-xl shadow-soft bg-white ring-1 ring-black/5 p-3 space-y-1 transition-all duration-300 transform ${
                isMegaMenuOpen === 'branches' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <NavLink 
                  to="/branches/bakhri" 
                  className="block px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={closeMenu}
                >
                  Bakhri (Main)
                </NavLink>
                <NavLink 
                  to="/branches/begusarai" 
                  className="block px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  onClick={closeMenu}
                >
                  Begusarai
                </NavLink>
              </div>
            </div>
            
            <NavLink to="/news-events" className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}>
              News & Events
            </NavLink>
            
            <NavLink to="/contact" className={({isActive}) => `nav-link text-lg ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>

          <Link to="/admissions" className="hidden lg:inline-flex btn btn-primary shadow-soft hover:shadow-lg">
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary focus:outline-none hover:bg-primary/5 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div 
          className={`absolute top-0 right-0 h-screen w-[80%] max-w-md bg-white overflow-y-auto transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button 
              className="p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-4 pb-6 space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => `block py-3 text-lg border-b border-gray-200 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-lg border-b border-gray-200 text-gray-700"
                onClick={() => toggleMegaMenu('about-mobile')}
              >
                <span>About</span>
                <ChevronDown size={16} className={`transform transition-transform duration-300 ${isMegaMenuOpen === 'about-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`pl-4 space-y-2 mt-2 ${isMegaMenuOpen === 'about-mobile' ? 'block' : 'hidden'}`}>
                <Link 
                  to="/about" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Overview
                </Link>
                <Link 
                  to="/about#mission-vision" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Mission & Vision
                </Link>
                <Link 
                  to="/about#leadership" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Leadership
                </Link>
              </div>
            </div>
            
            <NavLink 
              to="/academics" 
              className={({isActive}) => `block py-3 text-lg border-b border-gray-200 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Academics
            </NavLink>
            
            <NavLink 
              to="/admissions" 
              className={({isActive}) => `block py-3 text-lg border-b border-gray-200 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Admissions
            </NavLink>
            
            <NavLink 
              to="/campus" 
              className={({isActive}) => `block py-3 text-lg border-b border-gray-200 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Campus
            </NavLink>
            
            <div>
              <button
                className="flex items-center justify-between w-full py-3 text-lg border-b border-gray-200 text-gray-700"
                onClick={() => toggleMegaMenu('branches-mobile')}
              >
                <span>Branches</span>
                <ChevronDown size={16} className={`transform transition-transform duration-300 ${isMegaMenuOpen === 'branches-mobile' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`pl-4 space-y-2 mt-2 ${isMegaMenuOpen === 'branches-mobile' ? 'block' : 'hidden'}`}>
                <NavLink 
                  to="/branches/bakhri" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Bakhri (Main)
                </NavLink>
                <NavLink 
                  to="/branches/begusarai" 
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Begusarai
                </NavLink>
              </div>
            </div>
            
            <NavLink 
              to="/news-events" 
              className={({isActive}) => `block py-3 text-lg border-b border-gray-200 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              News & Events
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({isActive}) => `block py-3 text-lg border-b border-gray-200 ${isActive ? 'text-primary font-medium' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            
            <div className="mt-6">
              <Link to="/admissions" className="w-full btn btn-primary block text-center text-lg" onClick={closeMenu}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
