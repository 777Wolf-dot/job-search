import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import "../Gigs/PostGig.css"
const PostGig = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);

  // ✅ Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error("Error fetching user:", error);
      else setUser(data.user);
    };
    getUser();
  }, []);

  // ✅ Upload image to Supabase Storage
  // ✅ Upload image to Supabase Storage
const uploadImage = async (file) => {
  if (!file) return null;

  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("gigs") // ✅ make sure you created a bucket named "gigs"
    .upload(fileName, file);

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  // ✅ get public URL from same bucket
  const { data: publicUrlData } = supabase.storage
    .from("gigs")
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};


  // ✅ Post Gig
  const handlePostGig = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = null;
      if (image) {
        imageUrl = await uploadImage(image);
      }

      const { error } = await supabase.from("gigs").insert([
        {
          employer_id: user?.id, // logged-in employer
          title,
          description,
          budget,
          location,
          deadline,
          image_url: imageUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Gig posted successfully!");
      setTitle("");
      setDescription("");
      setBudget("");
      setLocation("");
      setDeadline("");
      setImage(null);
    } catch (err) {
      console.error("Error posting gig:", err);
      alert("❌ Failed to post gig. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-gig-container">
      <h1>📢 Post a Gig</h1>
      <form onSubmit={handlePostGig} className="gig-form">
        <input
          type="text"
          placeholder="Gig Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe the gig..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <input
          type="number"
          placeholder="Budget (USD)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Gig"}
        </button>
      </form>
    </div>
  );
};

export default PostGig;
