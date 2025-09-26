// src/Pages/User/Profile.js
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "../User/userstyling/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      // ✅ Updated for Supabase v2
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        console.error("Error getting session:", sessionError.message);
        setLoading(false);
        return;
      }

      if (!session) {
        setLoading(false);
        return;
      }

      const userId = session.user.id;

      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
      } else {
        setUser(data);
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p className="profile-loading">Loading profile...</p>;
  if (!user) return <p className="profile-loading">No profile found.</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src={user.avatar || "https://via.placeholder.com/150"}
              alt="Profile Avatar"
            />
          </div>
          <h2>{user.name}</h2>
          <p className="profile-role">{user.role}</p>
        </div>

        <div className="profile-info">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="profile-actions">
          <button className="btn primary">Edit Profile</button>
          <button
            className="btn secondary"
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
