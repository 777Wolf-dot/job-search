import React from "react";
import "./Team.css";

function Team() {
  const teamMembers = [
    {
      name: "Jane Mwangi",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
      bio: "Jane is passionate about connecting young professionals to meaningful opportunities and driving innovation across Africa."
    },
    {
      name: "David Otieno",
      role: "CTO",
      img: "https://images.unsplash.com/photo-1603415526960-f8f0a5fa0c34?auto=format&fit=crop&w=500&q=80",
      bio: "David leads the technical team, ensuring the platform is secure, scalable, and user-friendly."
    },
    {
      name: "Mary Achieng",
      role: "Community Manager",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
      bio: "Mary manages partnerships, events, and keeps our user community engaged and thriving."
    },
    {
      name: "Kevin Njoroge",
      role: "Head of Marketing",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
      bio: "Kevin drives brand visibility and ensures our platform reaches the right audiences."
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">👥 Meet Our Team</h2>
        <p className="section-subtitle">
          A passionate group of innovators, dreamers, and doers working together
          to empower talent and businesses.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-img">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
