// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Find Your Dream Job",
    subtitle: "Connecting talents with opportunities across Kenya and beyond.",
    image: "https://i.ibb.co/3N4V3vY/slide1.jpg",
  },
  {
    title: "Offer Your Unique Gig",
    subtitle: "Grow your freelance career with amazing gigs and projects.",
    image: "https://i.ibb.co/7Q1qP3X/slide2.jpg",
  },
  {
    title: "Join Our Community",
    subtitle: "Connect with employers and talented freelancers easily.",
    image: "https://i.ibb.co/2s8FmnX/slide3.jpg",
  },
  {
    title: "Work from Anywhere",
    subtitle: "Remote jobs that let you balance life and career seamlessly.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Empowering Freelancers",
    subtitle: "Turn your skills into a thriving business opportunity.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Top Employers",
    subtitle: "Trusted companies hiring skilled professionals daily.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Learn & Grow",
    subtitle: "Resources to sharpen your skills and boost your career.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
  {
    title: "Team Collaboration",
    subtitle: "Find projects and teams that fit your goals.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    title: "Interviews Made Easy",
    subtitle: "Prepare, connect, and land the right opportunity.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  },
  {
    title: "Your Career, Your Future",
    subtitle: "Step into new opportunities with confidence.",
    image: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b9",
  },
];

const features = [
  {
    title: "Verified Jobs",
    img: "https://i.ibb.co/zTpVchKP/job.jpg",
    description: "Access hundreds of job listings from trusted companies and employers.",
  },
  {
    title: "Diverse Gigs",
    img: "https://i.ibb.co/wr3YQmxs/gigs.png",
    description: "From tech to creative, explore gigs that match your passion and skills.",
  },
  {
    title: "Career Resources",
    img: "https://i.ibb.co/zVzS4srM/career.jpg",
    description: "Build your resume, sharpen interview skills, and learn from experts.",
  },
];

const categories = [
  { name: "Tech & IT", img: "https://i.ibb.co/nqmNtnk8/tech.jpg" },
  { name: "Design & Creative", img: "https://i.ibb.co/ddsRZSq/creative.jpg" },
  { name: "Writing & Translation", img: "https://i.ibb.co/wFWsZZnz/translation.webp" },
  { name: "Marketing", img: "https://i.ibb.co/M5CjmcsW/marketting.jpg" },
  { name: "Local Jobs", img: "https://i.ibb.co/nNcCqqXL/translation.webp" },
];

const companies = [
  "https://i.ibb.co/hJ49QHtq/comp1.jpg",
  "https://i.ibb.co/sp9M5Qq6/comp2.jpg",
  "https://i.ibb.co/j9J5pmw0/comp3.jpg",
  "https://i.ibb.co/k2QsK25x/comp4.jpg",
];

const testimonials = [
  {
    text: "I landed my dream job thanks to this platform. It’s user-friendly and filled with real opportunities.",
    name: "- Sarah M.",
  },
  {
    text: "As a freelancer, I found gigs that pay well and match my skills. Highly recommended!",
    name: "- David K.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* ========================== HERO SLIDER ========================== */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${currentSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="homepage-buttons">
                  <Link to="/jobs/jobs" className="btn primary">
                    🔍 Browse Jobs
                  </Link>
                  <Link to="/jobs/post-job" className="btn secondary">
                    ➕ Post a Gig
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* ========================== FEATURES ========================== */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <img src={f.img} alt={f.title} />
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== CATEGORIES ========================== */}
      <section className="categories">
        <h2>Job Categories</h2>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== COMPANIES ========================== */}
      <section className="companies">
        <h2>Trusted by Top Companies</h2>
        <div className="company-logos">
          {companies.map((logo, i) => (
            <img key={i} src={logo} alt={`Company ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ========================== TESTIMONIALS ========================== */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p>"{t.text}"</p>
              <h4>{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== CALL TO ACTION ========================== */}
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
