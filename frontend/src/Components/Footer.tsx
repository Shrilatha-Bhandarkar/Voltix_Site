
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are not afraid to say no to projects that we cannot do well. 
            We would rather focus on a few projects and do them right than take on 
            too much and sacrifice quality.</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Get in touch</a></li>
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <p>Kinfra Calicut - Near Calicut University, 
            Chelambra P.O Kakkancherry, Malappuram, Kerala. 673634</p>
          <p>+91 80893 25152</p>
          <p>voltixsolution@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

