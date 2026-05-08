import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title font-heading text-center">
          Visit <span className="text-gradient">Us</span>
        </h2>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-item">
              <div className="info-icon text-gradient"><HiOutlineLocationMarker size={30} /></div>
              <div>
                <h4 className="font-heading">Location</h4>
                <p>Sector A-3 Sector 3, Baldia Town, Karachi</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon text-gradient"><HiOutlinePhone size={30} /></div>
              <div>
                <h4 className="font-heading">Phone</h4>
                <p><a href="tel:+923119977353">+92 311 9977353</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon text-gradient"><HiOutlineClock size={30} /></div>
              <div>
                <h4 className="font-heading">Opening Hours</h4>
                <p>Open 24 Hours</p>
              </div>
            </div>
            
            <div className="contact-cta">
              <a href="tel:+923119977353" className="btn-primary bg-gradient">Call for Takeaway</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-map"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=Iqbal%20Nihari%20Sector%203%20Baldia%20Town%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Iqbal Nihari Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
