import React, { useState } from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  const [balanceLimit, setBalanceLimit] = useState(70000); // Default value from image

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setBalanceLimit(value);
  };

  const getSliderBackground = (value) => {
    const min = 10000;
    const max = 100000;
    const percentage = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #007bff ${percentage}%, #e9ecef ${percentage}%)`,
    };
  };

  const formatCurrency = (value) => {
    // Simple currency formatting, adjust as needed
    return "$" + parseInt(value).toLocaleString();
  };

  return (
    <section className="quote-section">
      <div className="container quote-container">
        <div className="quote-image-column">
          {/* Image placed via CSS background or img tag */}
          <img
            src="/images/other/thao1.png"
            alt="Thao Ho"
            className="quote-person-image"
          />
          <div className="quote-signature">Thao Ho</div>
        </div>
        <div className="quote-form-column">
          <div className="quote-form-header">
            <span className="estimate-subtitle">
              {" "}
              <span className="arrows">
                <span className="arrow one">&gt;</span>
                <span className="arrow two">&gt;</span>
                <span className="arrow three">&gt;</span>
              </span>{" "}
              GET A FREE ESTIMATE <span className="arrow one">&lt;</span>
              <span className="arrow two">&lt;</span>
              <span className="arrow three">&lt;</span>
            </span>
            <h2 className="quote-title">
              Get an insurance quote to get started!
            </h2>
          </div>
          <form className="quote-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <select className="form-control">
                <option value="">Select type of insurance</option>
                <option value="life">Life Insurance</option>
                <option value="health">Health Insurance</option>
                <option value="auto">Auto Insurance</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group slider-group">
              <label htmlFor="balanceSlider">Limits of Balance:</label>
              <div className="slider-container">
                <input
                  type="range"
                  id="balanceSlider"
                  min="10000"
                  max="100000"
                  value={balanceLimit}
                  onChange={handleSliderChange}
                  className="form-range-slider"
                  style={getSliderBackground(balanceLimit)}
                />
                <span className="slider-value">
                  {formatCurrency(balanceLimit)}
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary quote-submit-btn">
              Get a Quote Now
            </button>
          </form>
        </div>
        <div className="quote-background-cityscape"></div>
      </div>
    </section>
  );
};

export default QuoteSection;
