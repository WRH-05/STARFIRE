import React from 'react';
import './Footer.css'; 
import logo from '../assets/micro_club_logo.png'; 

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-and-title">
            <img src={logo} alt="Micro Club Logo" className="footer-logo" /> {/* Logo */}
            <h2>Get in Touch</h2>
          </div>
          <p>
            Micro Club Where skills decided to meet awarness !
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/micro-club"><i className="fab fa-linkedin"></i></a> {}
            <a href="https://github.com/microclub"><i className="fab fa-github"></i></a> {}
            <a href="https://twitter.com/microclub"><i className="fab fa-twitter"></i></a> {}
            <a href="https://www.instagram.com/micro_club/"><i className="fab fa-instagram"></i></a> {}
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-box">
            <i className="fas fa-globe"></i>
            <div className="footer-card">
              <a href="https://microclub.info/">website.com/micro-club</a> {}
            </div>
          </div>
          <div className="footer-box">
            <i className="fas fa-envelope"></i>
            <div className="footer-card">
              <a href="mailto:contact@microclub.com">microclub@gmail.com</a> {}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
