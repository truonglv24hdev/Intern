import React from "react";

const ServiceCard = ({ number, icon, title, description }) => {
  return (
    <div className="home-service-card">
      <div className="home-service-content">
        <div className="home-service-icon">
          <img src={icon} alt={title} />
        </div>
        <div className="home-service-number">{number}</div>
        <h3 className="home-service-title">{title}</h3>
        <p className="home-service-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 