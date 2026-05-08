import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-tooltip font-heading">Order via WhatsApp</div>
      <a 
        href="https://wa.me/923119977353" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <div className="whatsapp-pulse"></div>
        <div className="whatsapp-pulse-2"></div>
        <FaWhatsapp size={35} className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
