import React from "react";
import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container">
        {/* 🌟 Mission */}
        <div className="mv-card mission">
          <div className="mv-text">
            <h2>🌍 Our Mission</h2>
            <p>
              Our mission is to <strong>bridge the gap</strong> between talented
              individuals and meaningful opportunities. We aim to empower people
              to pursue fulfilling careers, connect businesses with skilled
              professionals, and foster a culture of growth and innovation across
              Kenya and beyond.
            </p>
          </div>
          <div className="mv-image">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80"
              alt="Mission"
            />
          </div>
        </div>

        {/* 🌟 Vision */}
        <div className="mv-card vision">
          <div className="mv-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
              alt="Vision"
            />
          </div>
          <div className="mv-text">
            <h2>🚀 Our Vision</h2>
            <p>
              We envision a future where <strong>every individual</strong> has
              access to fair opportunities, businesses thrive with the right
              talent, and technology drives inclusive development. Our goal is to
              become the <strong>leading platform</strong> for jobs and gigs in
              Africa, inspiring innovation, unity, and economic progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
