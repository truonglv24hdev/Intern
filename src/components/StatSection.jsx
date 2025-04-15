import React from "react";
import "./StatSection.css";
import { FaGlobe, FaChartLine, FaSmile, FaStar } from "react-icons/fa";

const StatSection = () => {
  return (
    <section className="stat-section">
      <div className="stat-container">
        <div className="stat-profile">
          <div className="agent-info">
            <img
              src="/images/other/stat.png"
              alt="Thao Ho"
              className="agent-avatar"
            />
            <div className="agent-details">
              <h3 className="agent-name">THAO HO (HANNAH)</h3>
              <p className="agent-title">Independent Agent</p>
            </div>
          </div>

          <div className="agent-achievement">
            <h2 className="achievement-number">8.62m+</h2>
            <p className="achievement-text">
              clients experience insurance excellence by us. Trusted services,
              customer-focused solutions, and a legacy of financial reliability.
            </p>
          </div>
        </div>

        <div className="stat-metrics">
          <div className="stat-card">
            <div className="stat-icon">
              <img src="/images/icons/13.png" alt="Global Country" />
            </div>
            <div className="stat-content">
              <div className="stat-main">
                <span className="stat-number">189+</span>
                <div className="stat-text">
                  <span className="stat-title">Global Country</span>
                  <p className="stat-description">
                    Placerat vestibulum lectus mauris
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src="/images/icons/14.png" alt="Growth" />
            </div>
            <div className="stat-content">
              <div className="stat-main">
                <span className="stat-number">81+</span>
                <div className="stat-text">
                  <span className="stat-title">Growth</span>
                  <p className="stat-description">
                    Placerat vestibulum lectus mauris
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src="/images/icons/15.png" alt="Satisfied Customer" />
            </div>
            <div className="stat-content">
              <div className="stat-main">
                <span className="stat-number">189+</span>
                <div className="stat-text">
                  <span className="stat-title">Satisfied Customer</span>
                  <p className="stat-description">
                    Placerat vestibulum lectus mauris
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src="/images/icons/16.png" alt="Satisfaction Rate" />
            </div>
            <div className="stat-content">
              <div className="stat-main">
                <span className="stat-number">500+</span>
                <div className="stat-text">
                  <span className="stat-title">Satisfaction Rate</span>
                  <p className="stat-description">
                    Placerat vestibulum lectus mauris
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatSection;
