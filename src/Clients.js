import React from 'react';
import './Clients.css';

// Import your client logos (adjust names as per your files)
import client1 from './Assets/client1.png';
import client2 from './Assets/client2.png';
import client3 from './Assets/client3.png';
import client4 from './Assets/client4.png';
import client5 from './Assets/client5.png';
// Add more imports if you have more images

const Clients = () => {
  const clients = [
    client1, client2, client3, client4, client5,
    // Duplicate for seamless infinite scrolling
    client1, client2, client3, client4, client5
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="clients-title">Trusted by Leading Companies</h2>
        
        <div className="marquee-container">
          <div className="marquee">
            {clients.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Client ${index + 1}`}
                className="client-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;