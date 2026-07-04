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

    if (name === 'email') {
      cleanedValue = value.trim();
    } else if (name === 'phone') {
      cleanedValue = value.replace(/[^0-9+\-\s()]/g, '');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  return (
    <div className="request-container">
      <div className="request-card">

        {/* Left Sidebar */}
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
                <p className="value">
                  Mon to Fri: 9.00am to 5.00pm
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">

          <div className="form-header">
            <span className="tag">
              REQUEST FOR SERVICES FORM
            </span>

            <h1>
              Let us know your areas of interest so that
              we can serve you better.
            </h1>
          </div>

          <form
            action="https://formsubmit.co/vthota@nalinsoft.com"
            method="POST"
            className="service-form"
          >

            {/* Hidden settings */}

            <input
              type="hidden"
              name="_subject"
              value="New Service Request"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thank-you"
            />

            {/* Name + Company */}

            <div className="form-row">

              <div className="form-group">
                <label>
                  Your Name <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Company <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Email */}

            <div className="form-group">
              <label>
                Email (Business Email Only)
                <span className="required">*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@company.com"
              />
            </div>

            {/* Phone + Service */}

            <div className="form-row">

              <div className="form-group">
                <label>
                  Phone Number
                  <span className="required">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label>Choose Service</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="mobile-app">
                    Mobile App Development
                  </option>

                  <option value="ai-ml">
                    AI & Machine Learning
                  </option>

                  <option value="cloud">
                    Cloud Solutions
                  </option>

                  <option value="consulting">
                    Consulting
                  </option>

                  <option value="erp-sap">
                    ERP - SAP
                  </option>

                </select>
              </div>

            </div>

            {/* Message */}

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

              <button
                type="submit"
                className="submit-btn"
              >
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