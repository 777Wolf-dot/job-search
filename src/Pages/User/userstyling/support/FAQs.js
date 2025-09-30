// src/Pages/Support/FAQs.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqList = [
  {
    question: "How do I create an account?",
    answer: "Click on Register from the Navbar and fill in your details.",
  },
  {
    question: "How can I post a job?",
    answer: "Only employers can post jobs. Go to 'Post a Job' after logging in.",
  },
  {
    question: "Can I apply for multiple jobs at once?",
    answer: "Yes, you can browse jobs and apply individually to each job.",
  },
  {
    question: "How do I reset my password?",
    answer: "Click on Login → Forgot Password, then follow the instructions.",
  },
  {
    question: "Who can see my profile?",
    answer: "Employers can view your profile if you have applied for a job or shared it publicly.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">📖 Frequently Asked Questions</h1>
      <div className="faq-grid">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <h3 className="faq-question">{faq.question}</h3>
              <span className="faq-icon">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div className="faq-answer-wrapper">
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
