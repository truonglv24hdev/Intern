import React from "react";
import VideoTestimonial from "./VideoTestimonial";

const TestimoniesTab = () => {
  const testimonies = [
    {
      id: 1,
      thumbnail: "/images/testimonial/testimonies/1.png",
      videoUrl: "#"
    },
    {
      id: 2,
      thumbnail: "/images/testimonial/testimonies/2.png",
      videoUrl: "#"
    },
    {
      id: 3,
      thumbnail: "/images/testimonial/testimonies/1.png",
      videoUrl: "#"
    },
    {
      id: 4,
      thumbnail: "/images/testimonial/testimonies/1.png",
      videoUrl: "#"
    },
    {
      id: 5,
      thumbnail: "/images/testimonial/testimonies/1.png",
      videoUrl: "#"
    },
    {
      id: 6,
      thumbnail: "/images/testimonial/testimonies/1.png",
      videoUrl: "#"
    }
  ];

  return (
    <div className="testimonies-grid">
      {testimonies.map((testimony) => (
        <VideoTestimonial
          key={testimony.id}
          thumbnail={testimony.thumbnail}
          videoUrl={testimony.videoUrl}
        />
      ))}
    </div>
  );
};

export default TestimoniesTab; 