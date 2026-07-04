import React, { useState } from 'react';
import './Header.css';
import logoImage from './Assets/imagenewupdated.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <img
            src={logoImage}
            alt="Nalinsoft"
            className="logo-image"
          />
        </div>

        {/* Hamburger Button */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>
            Home
          </a>

          <a onClick={() => scrollToSection('technologies')}>
            Technologies
          </a>

          <a onClick={() => scrollToSection('services')}>
            Services
          </a>

          <a onClick={() => scrollToSection('request-services')}>
            Service Request
          </a>

          <a onClick={() => scrollToSection('about')}>
            About Us
          </a>

          <a onClick={() => scrollToSection('contact')}>
            Contact Us
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;