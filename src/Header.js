import React from 'react';
import './Header.css';
import logoImage from './Assets/NalinSoft-logo1.jpg.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logoImage} alt="Nalinsoft" className="logo-image" />
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Services</a>
          <a href="#">Advanced Analytics</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;