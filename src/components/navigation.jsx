import React, { useState, useEffect } from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showMobileMenu]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <nav className="main-nav">
      <div className="container">
        <div className="nav-container">
          <div className="logo-nav-wrapper">
            <div className="logo">
              <a href="/">
                <img src="/images/other/logo.png" alt="Guardians of Life Insurance" />
                <div className="logo-text">
                  <span className="logo-main">Guardians of Life</span>
                  <span className="logo-sub">INSURANCE</span>
                </div>
              </a>
            </div>
            
            <div className="mobile-toggle" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          
          <ul className="nav-menu desktop-menu">
            <li><a href="#" className="active">HOME</a></li>
            <li><a href="#about-us">ABOUT US</a></li>
            <li><a href="#service">SERVICE</a></li>
            <li><a href="#testimonial">TESTIMONIAL</a></li>
            <li><a href="#awards">AWARDS</a></li>
            <li><a href="#questions">QUESTIONS</a></li>
            <li><a href="#footer">CONTACT US</a></li>
            <li className="language">
              <a href="#">
                <img src="/images/other/vietnam-flag.png" alt="Vietnamese Flag" />
                <span>TIẾNG VIỆT</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <div className={`mobile-menu-sidebar ${showMobileMenu ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="sidebar-title">TRANG CHỦ</div>
          <button className="close-menu" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="mobile-menu-items">
          <li><a href="#" onClick={closeMobileMenu}>TRANG CHỦ</a></li>
          <li><a href="#about-us" onClick={closeMobileMenu}>DỊCH VỤ</a></li>
          <li><a href="#service" onClick={closeMobileMenu}>CHỨNG THỰC</a></li>
          <li><a href="#awards" onClick={closeMobileMenu}>GIẢI THƯỞNG</a></li>
          <li><a href="#footer" onClick={closeMobileMenu}>LIÊN HỆ</a></li>
          <li><a href="#questions" onClick={closeMobileMenu}>CÂU HỎI</a></li>
        </ul>
      </div>
      
      {/* Overlay for mobile menu */}
      {showMobileMenu && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
    </nav>
  );
};

export default Navigation;
