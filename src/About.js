import React from 'react';
import './About.css';
import aboutimage from './Assets/Aboutcompany.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-tag">About </p>
          <h2 className="about-title">
            Nalinsoft - Transforming Businesses with Smart Technology
          </h2>
          <p className="about-description">
            At Nalinsoft, we specialize in delivering innovative technology solutions that drive business growth. From ERP systems and digital transformation to custom software development and AI-powered solutions, we help organizations embrace the future with confidence.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img 
            src={aboutimage} 
            alt="About Nalinsoft" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;