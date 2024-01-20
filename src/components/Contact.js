// Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css'; // Correct relative path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, let's just log the form data to the console
    console.log('Form data submitted:', formData);
    // You can add further logic here, such as sending an email, connecting to a backend, etc.
    // Display a submission success message or notification to the user
    alert('Form submitted successfully!');
  };

  return (
    <section className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>Contact me at: maxsebok04@gmail.com</p>
      <p>Phone: +61 468 751 322</p>
    </section>
  );
};

export default Contact;
