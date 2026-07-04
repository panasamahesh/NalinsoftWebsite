import React from 'react';
import './Footer.css';
import Logo from  './Assets/imagenewupdated.jpg'

const Footer = () => {
  return (
    <>
      {/* Wave Divider */}
      <div className="wave-divider"></div>

      <footer className="footer">
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-col logo-col">
            <div className="footer-logo">
              <img src={Logo}  className='Nalin'/>

            </div>
            <p className="company-desc">
              Empowering businesses through intelligent <br />and scalable digital solutions. 
              Innovation, integrity, and impact — transforming the future of business.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Who we are</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Branches */}
          <div className="footer-col">
            <h3>Our Branches</h3>
            <div className="branches">
              <div className="branch">
                <strong>India:</strong><br />
                2nd Floor, 6-3-347/17/5, <br></br>Dwarakapuri Colony, Road No 2, <br></br>Banjara hills, Hyderabad, Telangana, 500082
              </div>
              <div className="branch">
                
                  Cell: 9849055966 <br></br> 
               <a style={{color:"white"}}>Email: vthota@nalinsoft.com</a>  
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Nalinsoft . All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;