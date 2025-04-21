import React from "react";
import "./ServiceSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServiceSection = () => {
  const serviceItems = [
    {
      id: 1,
      title: "Living With Benefits Insurance",
      description: "Bảo vệ quyền lợi khi còn sống",
      icon: "/images/icons/8.png",
      image: "/images/services/service1.png",
    },
    {
      id: 2,
      title: "Life Insurances ( IUL, Whole, Life...)",
      description: "Bảo hiểm bảo vệ trọn đời",
      icon: "/images/icons/5.png",
      image: "/images/services/service2.png",
    },
    {
      id: 3,
      title: "Term Insurances",
      description: "Bảo hiểm bảo vệ tạm thời 10,20 hoặc 30 năm",
      icon: "/images/icons/6.png",
      image: "/images/services/service3.png",
    },
    {
      id: 4,
      title: "Mortgage Protection",
      description: "Bảo hiểm bảo vệ tài sản và thu nhập",
      icon: "/images/icons/9.png",
      image: "/images/services/service4.png",
    },
    {
      id: 5,
      title: "College Funding",
      description: "Quỹ học cho con",
      icon: "/images/icons/10.png",
      image: "/images/services/service5.png",
    },
    {
      id: 6,
      title: "Life time income tax free",
      description: "Lương hưu trọn đời miễn thuế",
      icon: "/images/icons/11.png",
      image: "/images/services/service6.png",
    },
    {
      id: 7,
      title: "Retirement Plan (IRAs, Roth IRAs, Annuities..)",
      description: "Kế hoạch hưu trí (IRAs, Roth IRAs, Annuities",
      icon: "/images/icons/7.png",
      image: "/images/services/service7.png",
    },
  ];

  return (
    <section className="home-service-section" id="service">
      <div className="home-container">
        <div className="home-service-header">
          <h2 className="home-section-title">SERVICE</h2>
          <p className="home-section-description">
            We provide insurance services
          </p>
        </div>

        <div className="home-service-grid">
          {serviceItems.map((item) => (
            <div className="service-card" key={item.id}>
              <img className="service-image-top" src={item.image}></img>
              <img
                className="service-bg-icon"
                src="/images/other/Vector.png"
              ></img>
              <img
                className="service-redirect-icon"
                src="/images/other/Frame.png"
              ></img>

              <div className="service-content">
                <img
                  className="service-icon"
                  src={item.icon}
                  alt="Service Icon"
                ></img>
                <p className="service-title">{item.title}</p>
                <p className="service-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
