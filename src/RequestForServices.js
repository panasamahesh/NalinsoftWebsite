'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import './RequestForServices.css';

const RequestForServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let cleanedValue = value;

    // Clean spaces for email and phone
    if (name === 'email') {
      cleanedValue = value.trim();           // Remove leading/trailing spaces
    } 
    else if (name === 'phone') {
      // Allow only numbers, spaces, +, -, () 
      cleanedValue = value.replace(/[^0-9+\-\s()]/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: cleanedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final cleanup before submission
    const submitData = {
      ...formData,
      email: formData.email.trim(),
      phone: formData.phone.trim().replace(/\s+/g, ' '), // normalize multiple spaces
    };

    console.log('Form Submitted:', submitData);
    alert('Form submitted successfully! (Demo)');
    
    // TODO: Send to your API / n8n workflow
  };

  return (
    <div className="request-container">
      <div className="request-card">

        {/* Left Sidebar - Contact Details */}
        <div className="contact-sidebar">
          <div className="contact-header">
            <h2>Contact Details</h2>
            <p>Please find below contact details and contact us today!</p>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="icon-circle">
                <Phone size={20} />
              </div>
              <div>
                <p className="label">Phone</p>
                <p className="value">+91 98490 55966</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <Mail size={20} />
              </div>
              <div>
                <p className="label">Email</p>
                <p className="value">vthota@nalinsoft.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle">
                <Clock size={20} />
              </div>
              <div>
                <p className="label">Working Hours</p>
                <p className="value">Mon to Fri: 9.00am to 5.00pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="form-section">
          <div className="form-header">
            <span className="tag">REQUEST FOR SERVICES</span>
            <h1>Let us know your areas of interest so that we can serve you better.</h1>
          </div>

          <form onSubmit={handleSubmit} className="service-form">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name <span className="required">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Company <span className="required">*</span></label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Email (Business Email Only) <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@company.com"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label style={{height:"20px"}}>Choose Service</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="consulting">Consulting</option>
                  <option value="erp-sap">ERP - SAP</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Your Message...</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Please describe your requirements..."
              />
            </div>

            <div className="submit-wrapper">
              <button type="submit" className="submit-btn">
                SEND
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestForServices;