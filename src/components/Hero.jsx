import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HiOutlineClock } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(badgeRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
    )
    .fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(imageRef.current,
      { x: 100, opacity: 0, scale: 0.9, rotation: 5 },
      { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.8'
    );

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 20,
      rotation: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge" ref={badgeRef}>
            <HiOutlineClock size={20} />
            <span>Open 24 Hours • Authentic Taste</span>
          </div>
          
          <div className="hero-text-wrapper" ref={textRef}>
            <h1 className="hero-title font-heading">
              <span className="line">Authentic</span>
              <span className="line">Karachi</span>
              <span className="line">
                <span className="text-gradient">Style</span> Nihari
              </span>
            </h1>
            
            <p className="hero-subtitle">
              Experience the rich, spicy flavor of traditional Pakistani cuisine right here in Baldia Town. Fresh naan, late-night service, and unforgettable taste.
            </p>
            
            <div className="hero-actions line">
              <a href="#menu" className="btn-primary bg-gradient">Explore Menu</a>
              <a href="tel:+923119977353" className="btn-outline">Order Now</a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="glow-effect"></div>
          <img 
            src="/Images/Restaurant Photo.png" 
            alt="Iqbal Nihari Location" 
            className="hero-location-image" 
            ref={imageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
