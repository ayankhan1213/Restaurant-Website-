import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const menuData = {
  nihari: [
    { name: 'Simple Nihari', price: 'PKR 450 - 550', desc: 'Classic authentic Karachi style nihari', image: '/Images/nihari_beef.png' },
    { name: 'Special Nihari', price: 'PKR 650 - 900', desc: 'Extra thick gravy with crispy onions', image: '/Images/nihari_special.png' },
    { name: 'Nalli Nihari', price: 'PKR 700 - 1000', desc: 'Bone marrow nihari, rich and spicy', image: '/Images/nihari_nalli.png' },
    { name: 'Spicy Nihari', price: 'PKR 550 - 650', desc: 'For those who love extra heat', image: '/Images/nihari_spicy.png' },
  ],
  desi: [
    { name: 'Beef Qeema Fry', price: 'PKR 450 - 700', desc: 'Sizzling minced beef with spices', image: '/Images/qeema_fry.png' },
    { name: 'Kata Kat', price: 'PKR 500 - 900', desc: 'Mixed organ meat stir-fry', image: '/Images/kata_kat.png' },
    { name: 'Paya', price: 'PKR 350 - 600', desc: 'Trotters cooked in slow heat', image: '/Images/paya_dish.png' },
    { name: 'Chicken Karahi', price: 'PKR 800 - 1500', desc: 'Tomato based golden gravy', image: '/Images/chicken_karahi.png' },
    { name: 'Beef Pulao', price: 'PKR 300 - 450', desc: 'Aromatic rice with tender beef', image: '/Images/beef_pulao.png' },
    { name: 'Chicken Biryani', price: 'PKR 250 - 400', desc: 'Spicy saffron colored rice', image: '/Images/chicken_biryani.png' },
  ],
  breads: [
    { name: 'Fresh Naan', price: 'PKR 30', desc: 'Soft from the tandoor', image: '/Images/fresh_naan.png' },
    { name: 'Sheermal', price: 'PKR 60 - 120', desc: 'Sweet saffron flatbread', image: '/Images/sheermal.png' },
  ]
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('nihari');

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title font-heading text-center">
            Our <span className="text-gradient">Menu</span>
          </h2>
          
          <div className="menu-tabs">
            <button 
              className={`tab-btn ${activeTab === 'nihari' ? 'active' : ''}`}
              onClick={() => setActiveTab('nihari')}
            >
              Nihari Specials
            </button>
            <button 
              className={`tab-btn ${activeTab === 'desi' ? 'active' : ''}`}
              onClick={() => setActiveTab('desi')}
            >
              Desi Dishes
            </button>
            <button 
              className={`tab-btn ${activeTab === 'breads' ? 'active' : ''}`}
              onClick={() => setActiveTab('breads')}
            >
              Breads & Sides
            </button>
          </div>
        </div>

        <motion.div className="menu-grid" layout>
          <AnimatePresence mode="wait">
            {menuData[activeTab].map((item, index) => (
              <motion.div 
                key={item.name}
                className="menu-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="menu-img-wrapper">
                  <img src={item.image} alt={item.name} className="menu-img" />
                </div>
                <div className="menu-info">
                  <div className="menu-title-row">
                    <h3 className="font-heading">{item.name}</h3>
                    <span className="menu-price text-gradient">{item.price}</span>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                  <a href="tel:+923119977353" className="menu-order-btn">
                    Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
