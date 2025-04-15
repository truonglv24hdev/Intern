import React from "react";
import "./TestimonialSection.css";
import BrochureCard from "./BrochureCard";

const retirementPlans = [
  {
    id: 1,
    title: "Fit Select Income",
    image: "/images/testimonial/retirements/1.png",
    link: "#",
  },
  {
    id: 2,
    title: "RetireMax Secure_Guaranteed Interest Rate Look In",
    image: "/images/testimonial/retirements/2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Retirement_Fit Secure Growth_Flyer",
    image: "/images/testimonial/retirements/3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Retirement_Fit Secure Growth",
    image: "/images/testimonial/retirements/4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Retirement_Flex Secure Growth Bonus",
    image: "/images/testimonial/retirements/5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Retirement_Flex Secure Growth Bonus_Flyer",
    image: "/images/testimonial/retirements/6.png",
    link: "#",
  },
  {
    id: 7,
    title: "Retirement_Flex Secure Growth Bonus_Flyer",
    image: "/images/testimonial/retirements/7.png",
    link: "#",
  },
  {
    id: 8,
    title: "Retirement_Flex Secure Growth Bonus_Flyer",
    image: "/images/testimonial/retirements/8.png",
    link: "#",
  },
  {
    id: 9,
    title: "Retirement_Flex Secure Growth Bonus_Flyer",
    image: "/images/testimonial/retirements/9.png",
    link: "#",
  },
];

const RetirementPlansTab = () => {
  return (
    <div className="brochure-grid">
      {retirementPlans.map((plan) => (
        <BrochureCard
          key={plan.id}
          title={plan.title}
          image={plan.image}
          link={plan.link}
        />
      ))}
    </div>
  );
};

export default RetirementPlansTab;
