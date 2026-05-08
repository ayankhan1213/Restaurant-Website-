import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineClock, HiOutlineFire, HiOutlineUserGroup, HiOutlineShoppingBag } from 'react-icons/hi';
import './Features.css';

const Features = () => {
  const features = [
    { icon: <HiOutlineClock size={40} />, title: '24/7 Service', desc: 'Open all day and night for your cravings.' },
    { icon: <HiOutlineFire size={40} />, title: 'Authentic Taste', desc: 'Original Karachi style spices and recipe.' },
    { icon: <HiOutlineUserGroup size={40} />, title: 'Family Friendly', desc: 'Comfortable seating for groups and families.' },
    { icon: <HiOutlineShoppingBag size={40} />, title: 'Takeaway', desc: 'Quick and secure packaging for home dining.' },
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon text-gradient">{feature.icon}</div>
              <h3 className="font-heading">{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
