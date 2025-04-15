import React from "react";
import { FaCaretRight } from "react-icons/fa";
import "./TestimonialSection.css";

const VideoTestimonial = ({ thumbnail, videoUrl }) => {
  const handlePlayClick = () => {
    if (videoUrl && videoUrl !== "#") {
      window.open(videoUrl, "_blank");
    }
  };

  return (
    <div className="video-testimonial">
      <div className="video-thumbnail">
        <img src={thumbnail} alt="Testimonial thumbnail" />
        <div className="overlay"></div>
        <button
          className="play-button"
          onClick={handlePlayClick}
          aria-label="Play video"
        >
          <FaCaretRight className="play-icon" />
        </button>
      </div>
    </div>
  );
};

export default VideoTestimonial;
