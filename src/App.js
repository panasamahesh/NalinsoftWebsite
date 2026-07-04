import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import './App.css';
import Clients from './Clients';
import Footer from './Footer';
import RequestForServices from './RequestForServices';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Main Sections with IDs for Navigation */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* Add more sections as needed */}
      <section id="technologies">
        {/* If you have a Technologies component, put it here */}
        {/* Or move content from Services if needed */}
      </section>

      <section id="advanced-analytics">
        {/* Advanced Analytics content goes here */}
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="request-services">
        <RequestForServices />
      </section>
      <section id="contact">
        
      <Footer />
      </section>
    </div>
  );
}

export default App;