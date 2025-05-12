import { useState } from 'react';
import '../styles/MobileMenu.css';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>('about');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close body scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const toggleSubmenu = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="mobile-menu-header">
        <div className="mobile-logo">
          <img src="/assets/logo.png" alt="Takshasila Vidyapeeth" className="logo-image" />
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-icon">
            <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
          </span>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="menu-container">
          <div className={`menu-item about-section ${activeMenu === 'about' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('about')}>
              <span>ABOUT US</span>
              <span className={`toggle-icon ${activeMenu === 'about' ? 'rotate' : ''}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            
            <div className={`submenu ${activeMenu === 'about' ? 'open' : ''}`}>
              <div className="submenu-item">
                <a href="#" className="submenu-link">The Legacy</a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">Our Vision</a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">Our Philosophy</a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">Awards & Recognitions</a>
              </div>
            </div>
          </div>
          
          <div className="menu-item main-section">
            <a href="#" className="menu-link">
              <span>PROGRAMMES</span>
              <span className="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          
          <div className="menu-item main-section">
            <a href="#" className="menu-link">
              <span>ACADEMICS & BEYOND</span>
              <span className="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          
          <div className="menu-item main-section">
            <a href="#" className="menu-link">
              <span>NEWS & EVENTS</span>
              <span className="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          
          <div className="menu-item main-section">
            <a href="#" className="menu-link">
              <span>START A SCHOOL</span>
              <span className="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          
          <div className="menu-item main-section">
            <a href="#" className="menu-link">
              <span>PARENT'S CORNER</span>
              <span className="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          <div className="menu-footer">
            <div className="contact-info">
              <p>Contact Us: +91 123-456-7890</p>
              <p>Email: info@takshasilavidyapeeth.edu.in</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.6117 13.2884 4.1944 12.773 4.95372C12.2575 5.71304 11.9877 6.61233 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
