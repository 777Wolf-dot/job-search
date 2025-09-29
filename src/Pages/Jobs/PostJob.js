import { useState } from "react";
import { supabase } from "../../supabaseClient";
import "../../Styles/PostJob.css";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    const user = (await supabase.auth.getUser()).data.user;

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
    } else {
      setMessage("✅ Job posted successfully!");
      setTitle("");
      setDescription("");
      setRequirements("");
      setSalary("");
      setLocation("");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Post a Job</h2>
      <form onSubmit={handlePost} className="space-y-4">
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Requirements"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
