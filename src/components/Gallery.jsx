import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/Images/Venue Photo.png', alt: 'Venue Details', classes: 'bento-large' },
    { src: '/Images/Restaurant Photo.png', alt: 'Restaurant Front', classes: 'bento-tall' },
    { src: '/Images/Menu Photo.png', alt: 'Iqbal Nihari Menu', classes: 'bento-wide' },
    { src: '/Images/Photo Restaurant 3x3.png', alt: 'Restaurant Interior', classes: 'bento-small' },
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery-header text-center">
          <h2 className="section-title font-heading">
            Authentic <span className="text-gradient">Atmosphere</span>
          </h2>
          <p className="gallery-subtitle">Step into a space where traditional taste meets comfort.</p>
        </div>
        
        <div className="bento-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className={`bento-item ${img.classes}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bento-img-wrapper">
                <img src={img.src} alt={img.alt} />
              </div>
              <div className="bento-overlay">
                <span className="font-heading">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
