import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './MobileContactBar.css';

const MobileContactBar = () => {
  return (
    <div className="mobile-contact-bar">
      <a href="tel:9712698689" className="contact-button phone-button">
        <FontAwesomeIcon icon={faPhone} />
        <span>Phone</span>
      </a>
      <a href="mailto:thao.ho@theguardians.life" className="contact-button email-button">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Email</span>
      </a>
    </div>
  );
};

export default MobileContactBar; 