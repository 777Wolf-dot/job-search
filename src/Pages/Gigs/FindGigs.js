import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "../Gigs/FindGigs.css";

const FindGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("gigs")
      .select("id, title, description, budget, location, deadline, created_at, image_url");

    if (error) {
      console.error("Error fetching gigs:", error);
    } else {
      setGigs(data);
    }
    setLoading(false);
  };

  const filteredGigs = gigs.filter(
    (gig) =>
      gig.title.toLowerCase().includes(search.toLowerCase()) ||
      gig.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="find-gigs-container">
      <h1>🔍 Find Gigs</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search gigs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {loading ? (
        <p>Loading gigs...</p>
      ) : filteredGigs.length > 0 ? (
        <div className="gig-grid">
          {filteredGigs.map((gig) => (
            <div key={gig.id} className="gig-card">
              {gig.image_url ? (
                <img src={gig.image_url} alt={gig.title} className="gig-image" />
              ) : (
                <div className="gig-image placeholder">📷 No Image</div>
              )}

              <div className="gig-content">
                <h3>{gig.title}</h3>
                <p className="gig-description">{gig.description}</p>
                <p>
                  💰 <strong>${gig.budget}</strong>
                </p>
                {gig.location && <p>📍 {gig.location}</p>}
                {gig.deadline && (
                  <p>⏳ Deadline: {new Date(gig.deadline).toLocaleDateString()}</p>
                )}
                <small>📅 Posted {new Date(gig.created_at).toLocaleDateString()}</small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No gigs found.</p>
      )}
    </div>
  );
};

export default FindGigs;
