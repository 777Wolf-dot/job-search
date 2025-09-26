import React from "react";
import "./OurStory.css"

const OurStory = () => {
  return (
    <section className="our-story">
      {/* Title */}
      <div className="our-story-header">
        <h1>Our Story</h1>
        <p>
          From humble beginnings to becoming Kenya’s leading Job & Gig platform, 
          our journey is fueled by passion, innovation, and community.
        </p>
      </div>

      {/* Story Content */}
      <div className="our-story-content">
        <div className="story-text">
          <h2>How It All Began</h2>
          <p>
            It all started with a simple question:{" "}
            <em>“Why is it so hard for talented people to find the right 
            opportunities?”</em>  
          </p>
          <p>
            We noticed that while Kenya is full of talented youth and 
            hardworking professionals, there was no centralized, trusted platform 
            where job seekers and gig providers could connect seamlessly.
          </p>
          <p>
            That’s when we decided to build a platform that bridges this gap —
            giving people visibility, trust, and access to real opportunities.
          </p>
        </div>

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
            alt="Team brainstorming"
          />
        </div>
      </div>

      {/* Timeline / Growth Section */}
      <div className="story-timeline">
        <div className="timeline-item">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Startup phase"
          />
          <div>
            <h3>2019 – The Idea</h3>
            <p>
              A group of young innovators came together to brainstorm ways to 
              connect job seekers and businesses more efficiently.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
            alt="Growth phase"
          />
          <div>
            <h3>2021 – Growth & Recognition</h3>
            <p>
              Our platform gained traction, helping thousands of people secure
              jobs and gigs across Kenya.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <img
            src="https://images.unsplash.com/photo-1581092917447-6dfc8e8b4c1f?auto=format&fit=crop&w=800&q=80"
            alt="Future vision"
          />
          <div>
            <h3>Today & Beyond</h3>
            <p>
              We continue to scale across Africa, building a future where talent
              meets opportunity with ease and fairness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
