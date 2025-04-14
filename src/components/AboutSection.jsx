import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="home-about-section">
      <div className="home-container">
        <div className="home-about-header">
          <h2 className="home-section-title">ABOUT US</h2>
          <p className="home-section-description">
            We provide a variety of products tailored to your financial needs.
          </p>
        </div>

        <div className="home-about-content">
          <div className="home-about-image">
            <img src="/images/other/about_us.png" alt="Family Protection" />
          </div>
          <div className="home-about-info">
            <h3 className="home-about-subtitle">YOUR FAMILY MATTER</h3>
            <p className="home-about-text">
              Independent insurance agents with years of experience in financial services.
            </p>
            
            <div className="home-about-features">
              <div className="home-features-column">
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Income Protection</span>
                </div>
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Income Protection</span>
                </div>
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Mortgage Protection</span>
                </div>
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Mortgage Protection</span>
                </div>
              </div>
              
              <div className="home-features-column">
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Income Protection</span>
                </div>
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Income Protection</span>
                </div>
                <div className="home-feature-item">
                  <span className="home-feature-check">✓</span>
                  <span className="home-feature-text">Mortgage Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 