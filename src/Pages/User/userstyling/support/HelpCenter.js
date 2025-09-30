// src/Pages/Support/HelpCenter.jsx
import React, { useState } from "react";

const HelpCenter = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Message sent! We will contact you at ${email}`);
    setMessage("");
    setEmail("");
  };

  return (
    <div className="helpcenter-container">
      <h1 className="helpcenter-title">💬 Help Center</h1>
      <p className="helpcenter-subtitle">
        Have a question or need assistance? Send us a message and we’ll get back to you promptly.
      </p>

      <form className="helpcenter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            placeholder="Write your message here..."
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="helpcenter-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HelpCenter;
