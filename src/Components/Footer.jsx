import React from 'react';
import './Footer.css';
import DHLLogo from '../assets/dhl.jpg';
import DHLogo from '../assets/dhl3.jpg';
import LKnogo from '../assets/dhl4.jpg';
import CLEogo from '../assets/dhl5.jpg';
import AMLogo from '../assets/dhl6.jpg';
import TYLogo from '../assets/dhl7.jpg';
import BYLogo from '../assets/dhl8.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/olugbeja.pelumi" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/pelumi09778314?s=21" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/ridwan-olugbeja-716127317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="footer-policy">Privacy Policy | Terms & Conditions</p>
        <div className="logos">
          <img src={DHLLogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }} />
          <img src={DHLogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }} />
          <img src={LKnogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }} />
          <img src={CLEogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }}/>
          <img src={AMLogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }} />
          <img src={TYLogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }}/>
          <img src={BYLogo} alt="DHL Logo" style={{ width: "30px", height: "auto" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
