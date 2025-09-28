import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [user, setUser] = useState(null);
  const [job, setJob] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to post a job.");
      navigate("/user/login");
      return;
    }

    if (user.user_metadata.role !== "employer") {
      alert("Only employers can post jobs.");
      return;
    }

    const { error } = await supabase.from("jobs").insert([
      { title: job.title, description: job.description, employer_id: user.id },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("✅ Job posted successfully!");
      setJob({ title: "", description: "" });
    }
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
