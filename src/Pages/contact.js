import React, { useState } from "react";

const Contact = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    // Fake AI response for now
    setResponse("🤖 Thanks for your question! Our AI will guide you shortly.");
    setQuestion("");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        We’d love to hear from you! Reach out anytime.
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-card">
          <h2>📍 Location</h2>
          <p>Nairobi, Kenya</p>
        </div>

        <div className="info-card">
          <h2>📞 WhatsApp</h2>
          <p>
            <a
              href="https://wa.me/254713046497"
              target="_blank"
              rel="noopener noreferrer"
            >
              Briton Kiplangat (Founder): 0713 046 497
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/254721474336"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jill Daniel (Co-Founder): 0721 474 336
            </a>
          </p>
        </div>
      </div>

      {/* AI Section */}
      <div className="ai-section">
        <h2>🤖 Ask our AI Assistant</h2>
        <form onSubmit={handleAskAI} className="ai-form">
          <input
            type="text"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="ai-input"
          />
          <button type="submit" className="ai-btn">
            Ask
          </button>
        </form>
        {response && <div className="ai-response">{response}</div>}
      </div>
    </div>
  );
};

export default Contact;
