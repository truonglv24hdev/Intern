import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThreads,
  faFacebookF,
  faTiktok,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const services = [
    "Living with benefits Insurance",
    "Life Insurances (IUL, Whole Life...)",
    "Term Insurances",
    "Mortgage Protection",
    "College Funding",
    "Life time income tax free",
    "Retirement plans (IRAs, Roth IRAs, Annuities...)",
  ];

  const socialLinks = [
    { icon: faThreads, url: "#" },
    { icon: faFacebookF, url: "#" },
    { icon: faTiktok, url: "#" },
    { icon: faYoutube, url: "#" },
    { icon: faInstagram, url: "#" },
  ];

  return (
    <footer className="footer-section" id="footer">
      <div className="container footer-container">
        {/* Column 1: Logo & Contact Info */}
        <div className="footer-column about-column">
          <img
            src="/images/footer/logo.png"
            alt="Guardians of Life Insurance"
            className="footer-logo"
          />
          <p className="footer-description">
            Helping the Asian community in the US have full cover health and
            financial protection, stable retirement income
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              </div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <a href="tel:971-229-8689" className="contact-link">
                  971-229-8689
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <a
                  href="mailto:thao.ho@theguardians.life"
                  className="contact-link"
                >
                  thao.ho@theguardians.life
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="contact-icon"
                />
              </div>
              <div className="contact-text">
                <span className="contact-label">Address</span>
                <p className="contact-address">
                  1424 N Brown Rd #Brown Rd #450, Lawrenceville, GA 30043
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column services-column">
          <h4 className="footer-heading">SERVICES</h4>
          <ul className="footer-links">
            {services.map((service, index) => (
              <li key={index}>
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Follow Us & Map */}
        <div className="footer-column follow-column">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon ? (
                  <FontAwesomeIcon icon={link.icon} />
                ) : (
                  <span className="social-icon-placeholder">G</span>
                )}
              </a>
            ))}
          </div>
          <div className="footer-map">
            <img
              src="/images/footer/map.png"
              alt="Location Map"
              className="map-image"
            />
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-submit">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <div className="copyright-text">
            Copyright belongs to Thinksmart Insurance LLC.
            <br />
            Copyright © 2024 Thinksmart Insurance.
          </div>
          <div className="footer-legal-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
