import React, { useState } from 'react';
import './SoftwareDevelopment.css';

function SoftwareDevelopment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to a server or performing client-side validation
    // You can add your own logic here
  };

  return (
    <div className="software-development-container">
      <h1>Software  Development</h1>
      <p>
        We specialize in creating custom mobile applications to meet your specific needs.
      </p>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <h1>Our Mobile App Development Services</h1>
      <p>
        We offer a range of mobile app development services to cater to various requirements.
      </p>
    </div>
  );
}

export default SoftwareDevelopment;
