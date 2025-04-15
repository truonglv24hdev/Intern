import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BrochureCard = ({ title, image, link }) => {
  return (
    <div className="brochure-card">
      <img src={image} alt={title} className="brochure-image" />
      <div className="brochure-content">
        <h3 className="brochure-title">{title}</h3>
        <a href={link} className="brochure-link">
          Continue Reading
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </a>
      </div>
    </div>
  );
};

export default BrochureCard; 