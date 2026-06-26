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
      <Hero />
      <About />
      <Services />
      <Clients/>
      <RequestForServices/>
      <Footer/>
    </div>
  );
}

export default App;