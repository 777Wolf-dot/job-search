import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("jobs").select("*");
      if (error) {
        console.error("Error fetching jobs:", error.message);
      } else {
        setJobs(data || []);
      }
      setLoading(false);
    };

    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user) {
        setUser(data.user);
      }
    };

    fetchJobs();
    getUser();
  }, []);

  const handleApply = async (jobId) => {
    if (!user) {
      alert("Please login to apply for jobs.");
      navigate("/user/login");
      return;
    }

    if (user.user_metadata?.role !== "employee") {
      alert("Only employees can apply for jobs.");
      return;
    }

    // Insert into "applications" table in Supabase
    const { error } = await supabase.from("applications").insert([
      {
        job_id: jobId,
        user_id: user.id,
        status: "pending", // could be "pending", "accepted", "rejected"
        applied_at: new Date(),
      },
    ]);

    if (error) {
      alert("Error applying for job: " + error.message);
    } else {
      alert("Successfully applied for the job!");
    }
  };

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div className="jobs-container">
      <h2 className="jobs-title">🚀 Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <ul className="jobs-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>
                <strong>Location:</strong> {job.location || "Not specified"}
              </p>
              <p>
                <strong>Salary:</strong> {job.salary || "Negotiable"}
              </p>
              <button
                className="apply-btn"
                onClick={() => handleApply(job.id)}
              >
                Apply Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;
