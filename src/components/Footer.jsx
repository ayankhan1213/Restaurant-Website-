import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="logo font-display">
              Iqbal <span className="text-gradient">Nihari</span>
            </h2>
            <p className="footer-desc">
              Serving the authentic taste of Karachi since day one. Experience the rich, spicy flavors of our traditional dishes.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="font-heading">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="font-heading">Contact Us</h4>
            <ul>
              <li>Baldia Town, Karachi</li>
              <li><a href="tel:+923119977353">+92 311 9977353</a></li>
              <li>Open 24 Hours</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iqbal Nihari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
