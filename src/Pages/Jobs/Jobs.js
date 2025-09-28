import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("jobs").select("*");
      if (!error) setJobs(data);
    };

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchJobs();
    getUser();
  }, []);

  const handleApply = (jobId) => {
    if (!user) {
      alert("Please login to apply for jobs.");
      navigate("/user/login");
      return;
    }

    if (user.user_metadata.role !== "employee") {
      alert("Only employees can apply for jobs.");
      return;
    }

    // TODO: Insert application logic
    alert(`Applied to job ID: ${jobId}`);
  };

  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button onClick={() => handleApply(job.id)}>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
