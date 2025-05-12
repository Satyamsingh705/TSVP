import { useState } from 'react';
import '../styles/MobileMenu.css';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>('about'); // Set 'about' as default open

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </div>
      
      {isMenuOpen && (
        <div className="menu-container">
          <div className="menu-item">
            <a href="#" className="menu-link">Home</a>
          </div>
          
          <div className={`menu-item about-section ${activeMenu === 'about' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('about')}>
              <span>About us</span>
              <span className="toggle-icon">{activeMenu === 'about' ? '−' : '+'}</span>
            </div>
            
            {activeMenu === 'about' && (
              <div className="submenu open">
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
            )}
          </div>
          
          <div className={`menu-item main-section ${activeMenu === 'programmes' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('programmes')}>
              <span>Programmes</span>
              <span className="toggle-icon">{activeMenu === 'programmes' ? '−' : '+'}</span>
            </div>
          </div>
          
          <div className={`menu-item main-section ${activeMenu === 'academics' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('academics')}>
              <span>Academics & Beyond</span>
              <span className="toggle-icon">{activeMenu === 'academics' ? '−' : '+'}</span>
            </div>
          </div>
          
          <div className={`menu-item main-section ${activeMenu === 'news' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('news')}>
              <span>News & Events</span>
              <span className="toggle-icon">{activeMenu === 'news' ? '−' : '+'}</span>
            </div>
          </div>
          
          <div className={`menu-item main-section ${activeMenu === 'school' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('school')}>
              <span>Start a School</span>
              <span className="toggle-icon">{activeMenu === 'school' ? '−' : '+'}</span>
            </div>
          </div>
          
          <div className={`menu-item main-section ${activeMenu === 'parents' ? 'active' : ''}`}>
            <div className="menu-link" onClick={() => toggleSubmenu('parents')}>
              <span>Parent's Corner</span>
              <span className="toggle-icon">{activeMenu === 'parents' ? '−' : '+'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
