import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./userstyling/EmployerDashboard.css";

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/user/login");
  };

  // 🔹 Reusable popup
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 2500);
  };

  // 🔹 Fetch employer's posted gigs (wrapped in useCallback to fix warning)
  const fetchMyGigs = useCallback(async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("gigs")
      .select("id, title, description, image_url, created_at")
      .eq("employer_id", user.id);

    if (error) {
      console.error("Error fetching gigs:", error);
      showPopup("❌ Failed to fetch gigs.", "error");
    } else {
      setGigs(data);
    }
    setLoading(false);
  }, []);

  // 🔹 Delete a gig
  const handleDelete = async (gigId) => {
    const { error } = await supabase.from("gigs").delete().eq("id", gigId);

    if (error) {
      console.error("Error deleting gig:", error);
      showPopup("❌ Failed to delete gig.", "error");
    } else {
      setGigs((prev) => prev.filter((gig) => gig.id !== gigId));
      showPopup("✅ Gig deleted successfully!", "success");
    }
  };

  useEffect(() => {
    fetchMyGigs();
  }, [fetchMyGigs]); // ✅ fixed warning

  // Dashboard actions
  const dashboardItems = [
    { title: "🏠 Home", action: () => navigate("/"), img: "/images/home.png" },
    { title: "➕ Post a Gig", action: () => navigate("/gigs/post-gig"), img: "https://i.ibb.co/yzVqT93/gig.png" },
    { title: "📝 Manage Posted Jobs", action: () => navigate("/employer/manage-jobs"), img: "/images/manage-jobs.png" },
    { title: "👥 View Applicants", action: () => navigate("/employer/applicants"), img: "/images/applicants.png" },
    { title: "🛠 Staff Management", action: () => navigate("/employer/staff"), img: "https://i.ibb.co/jvbPMBkm/STAFF.jpg" },
    { title: "📞 Contact", action: () => navigate("/contact"), img: "/images/contact.png" },
    { title: "🚪 Logout", action: handleLogout, img: "/images/logout.png" },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🏢 Employer Dashboard</h2>

      {/* ✅ Popup message */}
      {popup.show && (
        <div className={`popup-message ${popup.type}`}>
          {popup.message}
        </div>
      )}

      {/* Dashboard cards */}
      <div className="dashboard-grid">
        {dashboardItems.map((item, idx) => (
          <div key={idx} className="dashboard-card" onClick={item.action}>
            <img src={item.img} alt={item.title} className="card-icon" />
            <p className="card-title">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Employer's posted gigs */}
      <div className="my-gigs-section">
        <h3>📝 My Posted Gigs</h3>
        {loading ? (
          <p>Loading your gigs...</p>
        ) : gigs.length > 0 ? (
          <ul className="my-gigs-list">
            {gigs.map((gig) => (
              <li key={gig.id} className="my-gig-card">
                {gig.image_url && (
                  <img
                    src={gig.image_url}
                    alt={gig.title}
                    className="my-gig-image"
                  />
                )}
                <div className="my-gig-info">
                  <h4>{gig.title}</h4>
                  <p>{gig.description}</p>
                  <small>
                    Posted: {new Date(gig.created_at).toLocaleDateString()}
                  </small>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(gig.id)}
                >
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not posted any gigs yet.</p>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;
