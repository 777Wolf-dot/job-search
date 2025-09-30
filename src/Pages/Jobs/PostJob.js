import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success or error
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Get the current logged-in user
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        alert("You must login to post a job.");
        navigate("/user/login");
      } else if (data.user.user_metadata.role !== "employer") {
        alert("Only employers can post jobs.");
        navigate("/user/dashboard");
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [navigate]);

  const handlePost = async (e) => {
    e.preventDefault();

    if (!user) return;

    const { error } = await supabase.from("jobs").insert([
      {
        title,
        description,
        requirements,
        salary,
        location,
        employer_id: user.id,
      },
    ]);

    if (error) {
      setMessage("❌ Failed to post job: " + error.message);
      setStatus("error");
    } else {
      setMessage("✅ Job posted successfully!");
      setStatus("success");
      setTitle("");
      setDescription("");
      setRequirements("");
      setSalary("");
      setLocation("");
    }
  };

  return (
    <div className="postjob-container">
      <div className="postjob-card">
        <h2 className="postjob-title">📢 Post a New Job</h2>
        <form onSubmit={handlePost} className="postjob-form">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              placeholder="Describe the role..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Requirements</label>
            <input
              type="text"
              placeholder="e.g. 3+ years experience, React.js"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              placeholder="e.g. $1500/month"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g. Nairobi, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit" className="postjob-btn">
            Post Job
          </button>
        </form>

        {message && (
          <div
            className={`message-box ${
              status === "success" ? "success" : "error"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
