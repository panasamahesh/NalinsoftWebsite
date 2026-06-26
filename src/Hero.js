import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Smart <span>ERP solutions</span>, smarter outcomes —<br />
          we turn complexity into clarity and value.
        </h1>

        <h4 className="hero-subtitle">
          Elevating ERP with intelligent, value added solutions that streamline processes 
          and drive real outcomes. Helping organizations achieve agility, resilience, 
          and excellence in the digital era.
        </h4>

        <button className="btn">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;