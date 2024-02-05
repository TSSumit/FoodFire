import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">If you have any questions or concerns, feel free to reach out to us!</p>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">Your Name:</label>
        <input type="text" id="name" name="name" className="contact-input" placeholder="Enter your name" required />

        <label htmlFor="email" className="contact-label">Your Email:</label>
        <input type="email" id="email" name="email" className="contact-input" placeholder="Enter your email" required />

        <label htmlFor="message" className="contact-label">Your Message:</label>
        <textarea id="message" name="message" className="contact-textarea" placeholder="Type your message here" required></textarea>

        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
