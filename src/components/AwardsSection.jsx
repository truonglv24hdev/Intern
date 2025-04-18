import React from "react";
import "./AwardsSection.css";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      image: "/images/awards/1.png",
    },
    {
      id: 2,
      image: "/images/awards/2.png",
    },
    {
      id: 3,
      image: "/images/awards/3.png",
    },
  ];

  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <div className="awards-header">
          <h2 className="section-title">AWARDS</h2>
          <p className="section-description">We provide insurance services</p>
        </div>

        <div className="awards-container">
          {awards.map((award) => (
            <div className={`award-card`} key={award.id}>
              <div className="award-image">
                <img src={award.image} alt={award.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="awards-navigation">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
