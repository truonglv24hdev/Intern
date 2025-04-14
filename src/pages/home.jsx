import React from "react";
import "./home.css";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import ServiceCard from "../components/ServiceCard";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  // Dữ liệu của các service cards
  const serviceData = [
    {
      number: "01",
      icon: "/images/icons/1.png",
      title: "Living with benefits Insurance",
      description: "We provide a variety of products tailored to your financial needs."
    },
    {
      number: "02",
      icon: "/images/icons/2.png",
      title: "Mortgage protection",
      description: "We provide a variety of products tailored to your financial needs."
    },
    {
      number: "03",
      icon: "/images/icons/3.png",
      title: "College Funding",
      description: "We provide a variety of products tailored to your financial needs."
    },
    {
      number: "04",
      icon: "/images/icons/4.png",
      title: "Life time income tax free",
      description: "We provide a variety of products tailored to your financial needs."
    }
  ];

  return (
    <div className="home-page">
      <Header />
      <Navigation />
      <Hero />
      <section className="home-needs-section">
        <div className="home-container">
          <div className="home-needs-header">
            <div className="home-title-container">
              <h2 className="home-section-title">YOU NEEDS</h2>
              <p className="home-section-description">
                We provide a variety of products tailored to your financial needs.
              </p>
            </div>
          </div>

          <div className="home-services-container">
            {serviceData.map((service, index) => (
              <ServiceCard 
                key={index}
                number={service.number}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default Home;
