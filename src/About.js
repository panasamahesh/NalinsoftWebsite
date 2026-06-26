import React from 'react';
import './About.css';
import aboutimage from './Assets/Aboutcompany.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-tag">About Nalinsoft</p>
          <h2 className="about-title">
            Techno Facts Solutions - Innovating The Future of Business Through Technology
          </h2>
          <p className="about-description">
            We are a forward-thinking technology company specializing in intelligent ERP solutions. 
            Our mission is to help businesses transform complexity into clarity through innovative 
            digital solutions.
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