// src/pages/About.js
import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* ===== Banner / Hero ===== */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Learn more about our story, mission, vision, and the amazing team
          behind this platform.
        </p>
      </section>

      {/* ===== Navigation Tabs ===== */}
      <nav className="about-nav">
        <a href="#our-story">Our Story</a>
        <a href="#mission-vision">Mission & Vision</a>
        <a href="#team">Team</a>
      </nav>

      {/* ===== Our Story Section ===== */}
      <section id="our-story" className="about-section">
        <h2>Our Story</h2>
        <p>
          Our platform was founded with the vision of bridging the gap between
          job seekers and gig providers in Kenya and beyond. We realized that
          many talented people were missing opportunities due to lack of access
          or visibility.  
        </p>
        <p>
          Today, we empower individuals and businesses by providing a trusted
          space to connect, collaborate, and grow together.
        </p>
      </section>

      {/* ===== Mission & Vision Section ===== */}
      <section id="mission-vision" className="about-section">
        <h2>Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To connect skilled individuals with the right
          opportunities while making the process transparent, affordable, and
          efficient.
        </p>
        <p>
          <strong>Vision:</strong> To become the leading job and gig marketplace
          in Africa, empowering communities and shaping the future of work.
        </p>
      </section>

      {/* ===== Team Section ===== */}
      <section id="team" className="about-section team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
            />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
            />
            <h3>John Smith</h3>
            <p>CTO & Developer</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Team member"
            />
            <h3>Mary Ann</h3>
            <p>Community Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
