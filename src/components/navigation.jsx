import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
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
          </div>
          <ul className="nav-menu">
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
    </nav>
  );
};

export default Navigation;
