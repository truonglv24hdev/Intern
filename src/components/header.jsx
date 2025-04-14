import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div className="container">
          <div className="contact-info">
            <div className="contact-item license">
              <i><FontAwesomeIcon icon={faCertificate} /></i>
              <span>National License: 20310594</span>
            </div>
            <div className="contact-item email">
              <i><FontAwesomeIcon icon={faEnvelope} /></i>
              <span>thao.ho@theguardians.life</span>
            </div>
            <div className="contact-item phone">
              <i><FontAwesomeIcon icon={faPhone} /></i>
              <span>971-269-8689</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
