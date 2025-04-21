import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div className="container-header">
          <div className="contact-info">
            <div className="contact-item license">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faCertificate} />
              </div>
              <span>National License: 20310594</span>
            </div>
            <div className="contact-item email">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span>thao.ho@theguardians.life</span>
            </div>
            <div className="contact-item phone">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span>971-269-8689</span>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
