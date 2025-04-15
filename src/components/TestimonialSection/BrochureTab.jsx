import React from "react";
import "./TestimonialSection.css";
import BrochureCard from './BrochureCard';

const brochures = [
  {
    id: 1,
    title: "Index Universal Life _ Brochures",
    image: "/images/testimonial/brochures/1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Survivor Life _ Buyer's Guide",
    image: "/images/testimonial/brochures/2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Survivor Life _ Brochures",
    image: "/images/testimonial/brochures/3.png",
    link: "#"
  },
  {
    id: 4,
    title: "Whole Life _ Brochure 1",
    image: "/images/testimonial/brochures/4.png",
    link: "#"
  },
  {
    id: 5,
    title: "Whole Life _ Brochure 2",
    image: "/images/testimonial/brochures/5.png",
    link: "#"
  },
  {
    id: 6,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/6.png",
    link: "#"
  },
  {
    id: 7,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/7.png",
    link: "#"
  },
  {
    id: 8,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/8.png",
    link: "#"
  },
  {
    id: 9,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/9.png",
    link: "#"
  },
  {
    id: 10,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/10.png",
    link: "#"
  },
  {
    id: 11,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/11.png",
    link: "#"
  },
  {
    id: 12,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/12.png",
    link: "#"
  },
  {
    id: 13,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/13.png",
    link: "#"
  },
  {
    id: 14,
    title: "Term Insurance _ Brochure",
    image: "/images/testimonial/brochures/14.png",
    link: "#"
  }
];

const BrochureTab = () => {
  return (
    <div className="brochure-grid">
      {brochures.map((brochure) => (
        <BrochureCard
          key={brochure.id}
          title={brochure.title}
          image={brochure.image}
          link={brochure.link}
        />
      ))}
    </div>
  );
};

export default BrochureTab;
