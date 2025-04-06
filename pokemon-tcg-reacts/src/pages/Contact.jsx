import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormMessage('Sending message...');

    const formData = new FormData(event.target);
    formData.append("access_key", "045045bd-7105-4d03-ac53-1c5f04ad227f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormMessage("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setFormMessage(`Error: ${data.message || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setFormMessage("Error: Network error. Please check your connection.");
    }
  };

  return (
    <div className="contact-container">
      {/* Left Side: Contact Form */}
      <div className="form-container">
        <h2><u>Contact Me</u> (if you have any issues here's where you'll be able to display it!)</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit">Send Message</button>

          <p className="form-message">{formMessage}</p>
        </form>
      </div>

      {/* Right Side: YouTube Video */}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/8cbHjCWZZn0?si=cYng9CTSry9pSfBX"
          title="Learn How to Play Pokémon TCG"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;