import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiUsers } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/Images/Venue Photo.png" alt="Iqbal Nihari Venue" className="about-image" />
            
            <div className="rating-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} color={i < 4 ? "var(--primary-color)" : "#555"} size={20} />
                ))}
              </div>
              <p className="rating-text"><strong>4.3/5</strong> based on <br/><HiUsers /> 77+ Reviews</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title font-heading">
              The True Taste of <span className="text-gradient">Karachi</span>
            </h2>
            <p className="about-description">
              Iqbal Nihari is a popular traditional Pakistani restaurant in Baldia Town, known for its authentic Karachi-style Nihari, desi breakfast dishes, and affordable prices. 
            </p>
            <p className="about-description">
              We are especially famous among local food lovers for our rich spicy flavor, fresh naan, and round-the-clock late-night food service. Whether you're here for a hearty breakfast or a late-night gathering, our family-friendly environment ensures a comfortable dining experience.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="text-gradient">24/7</h3>
                <p>Opening Hours</p>
              </div>
              <div className="stat-item">
                <h3 className="text-gradient">PKR</h3>
                <p>100 - 1000 Range</p>
              </div>
              <div className="stat-item">
                <h3 className="text-gradient">100%</h3>
                <p>Authentic Desi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
