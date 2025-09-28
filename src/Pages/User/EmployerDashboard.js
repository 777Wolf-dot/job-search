import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./userstyling/EmployerDashboard.css";

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/user/login");
  };

  return (
    <div className="dashboard-container">
      <h2>🏢 Employer Dashboard</h2>
      <nav className="dashboard-nav">
        <ul>
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button>Post a Job</button></li>
          <li><button>Manage Posted Jobs</button></li>
          <li><button>View Applicants</button></li>
          <li><button>Staff Management</button></li>
          <li><button>Contact</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default EmployerDashboard;
