// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./userstyling/Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("auth_id", user.id)
          .maybeSingle();

        if (error) console.error(error);
        else setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleUpload = async () => {
    if (!file || !profile) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${profile.auth_id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error(uploadError);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const { error: updateError } = await supabase
      .from("user_profiles")
      .update({ avatar_url: urlData.publicUrl })
      .eq("auth_id", profile.auth_id);

    if (updateError) console.error(updateError);
    else setProfile({ ...profile, avatar_url: urlData.publicUrl });
  };

  if (loading) return <p>Loading profile...</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <img
        src={profile.avatar_url || "/default-avatar.png"}
        alt="Profile Avatar"
        className="profile-avatar"
      />
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Role:</strong> {profile.role}</p>

      <div className="upload-section">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Upload Avatar</button>
      </div>
    </div>
  );
}
