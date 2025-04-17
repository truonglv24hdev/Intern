import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="corner-shape corner-top-left"></div>
      <div className="corner-shape corner-top-left-1"></div>
      <div className="corner-shape corner-top-right"></div>
      <div className="corner-shape corner-top-right-1"></div>
      <div className="corner-shape corner-bottom-left"></div>
      <div className="corner-shape corner-bottom-left-1"></div>
      <div className="corner-shape corner-bottom-right"></div>
      <div className="corner-shape corner-bottom-right-1"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">THAO HO (HANNAH)</h1>
            <h2 className="hero-title">INDEPENDENT AGENT</h2>
            <p className="hero-description">
              Our job is proving you and your family a life time financial protection.
            </p>
          </div>
          <div className="hero-image">
              <img src="/images/other/thao.png" alt="Thao Ho (Hannah) - Independent Agent" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 