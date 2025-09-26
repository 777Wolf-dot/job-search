import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import "../User/userstyling/Register.css";

const Register = () => {
  const [role, setRole] = useState(""); // employer | employee
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Check if email already exists in profiles
      const { data: existingProfile } = await supabase
        .from("user_profiles")
        .select("id")
        .eq("email", email)
        .single();

      if (existingProfile) {
        setMessage("❌ This email is already registered. Try logging in.");
        setLoading(false);
        return;
      }

      // 1. Create user in Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      // 2. Store role + name in user_profiles table
      const user = data.user;
      if (user) {
        const { error: profileError } = await supabase
          .from("user_profiles")
          .insert([
            {
              id: user.id, // same id as auth
              name,
              role,
              email,
            },
          ]);

        if (profileError) throw profileError;
      }

      setMessage("✅ Account created! Check your email to verify.");
      setEmail("");
      setPassword("");
      setName("");
      setRole("");
    } catch (err) {
      console.error(err);
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Create Account</h1>

      {/* STEP 1: Role selection */}
      {!role ? (
        <div className="role-selection">
          <h2>Register As</h2>
          <button onClick={() => setRole("employer")} className="btn primary">
            👔 Employer
          </button>
          <button onClick={() => setRole("employee")} className="btn secondary">
            👷 Employee
          </button>
        </div>
      ) : (
        /* STEP 2: Registration Form */
        <form onSubmit={handleRegister} className="register-form">
          <h2>{role === "employer" ? "Employer" : "Employee"} Signup</h2>
          <input
            type="text"
            placeholder="Full Name / Company"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
          <p className="message">{message}</p>
        </form>
      )}
    </div>
  );
};

export default Register;

