// src/pages/Home.js
import React from "react";
import "../Styles/Home.css";// We'll style separately

const Home = () => {
  return (
    <div className="home">
     {/* ==========================
      🌟 HERO SECTION WITH BACKGROUND SLIDER
========================== */}
<section className="hero">
  <div className="hero-overlay">
    <div className="hero-content">
      <h1>
        Find Your <span className="highlight">Dream Job</span> <br />
        or Offer Your <span className="highlight">Unique Gig</span>
      </h1>
      <p>
        Connecting talents with opportunities across Kenya and beyond.
        Explore jobs, gigs, and resources designed to fuel your career
        growth.
      </p>
      <div className="hero-buttons">
        <button className="btn primary">🔍 Browse Jobs</button>
        <button className="btn secondary">➕ Post a Gig</button>
      </div>
    </div>
  </div>
</section>

      {/* ==========================
          🔑 FEATURES SECTION
      ========================== */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img
              src="https://i.ibb.co/zTpVchKP/job.jpg"
              alt="Jobs"
            />
            <h3>Verified Jobs</h3>
            <p>
              Access hundreds of job listings from trusted companies and
              employers.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://i.ibb.co/wr3YQmxs/gigs.png"
              alt="Gigs"
            />
            <h3>Diverse Gigs</h3>
            <p>
              From tech to creative, explore gigs that match your passion and
              skills.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://i.ibb.co/zVzS4srM/career.jpg"
              alt="Resources"
            />
            <h3>Career Resources</h3>
            <p>
              Build your resume, sharpen interview skills, and learn from
              experts.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================
          📂 CATEGORIES SECTION
      ========================== */}
      <section className="categories">
        <h2>Job Categories</h2>
        <div className="category-grid">
          {[
            { name: "Tech & IT", img: "https://i.ibb.co/nqmNtnk8/tech.jpg" },
            { name: "Design & Creative", img: "https://i.ibb.co/ddsRZSq/creative.jpg" },
            { name: "Writing & Translation", img: "https://i.ibb.co/wFWsZZnz/translation.webp"},
            { name: "Marketing", img: "https://i.ibb.co/M5CjmcsW/marketting.jpg" },
            { name: "Local Jobs", img: "https://i.ibb.co/nNcCqqXL/translation.webp"},
          ].map((cat, index) => (
            <div key={index} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================
          🏢 COMPANIES SECTION
      ========================== */}
      <section className="companies">
        <h2>Trusted by Top Companies</h2>
        <div className="company-logos">
          <img
            src="https://i.ibb.co/hJ49QHtq/comp1.jpg"
            alt="Company 1"
          />
          <img
            src="https://i.ibb.co/sp9M5Qq6/comp2.jpg"
            alt="Company 2"
          />
          <img
            src="https://i.ibb.co/j9J5pmw0/comp3.jpg"
            alt="Company 3"
          />
          <img
            src="https://i.ibb.co/k2QsK25x/comp4.jpg"
            alt="Company 4"
          />
        </div>
      </section>

      {/* ==========================
          💬 TESTIMONIALS
      ========================== */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "I landed my dream job thanks to this platform. It’s user-friendly
              and filled with real opportunities."
            </p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "As a freelancer, I found gigs that pay well and match my skills.
              Highly recommended!"
            </p>
            <h4>- David K.</h4>
          </div>
        </div>
      </section>

      {/* ==========================
          🚀 CALL TO ACTION
      ========================== */}
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Whether you’re an employer, a job seeker, or a freelancer, we’ve got
          the tools you need.
        </p>
        <button className="btn primary">Join Us Today</button>
      </section>
    </div>
  );
};

export default Home;
