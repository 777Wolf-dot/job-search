import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./userstyling/EmployeeDashboard.css";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/user/login");
  };

  return (
    <div className="dashboard-container">
      <h2>👤 Employee Dashboard</h2>
      <nav className="dashboard-nav">
        <ul>
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button>View Available Jobs</button></li>
          <li><button>Apply for Jobs</button></li>
          <li><button onClick={() => navigate("/user/profile")}>Manage Profile</button></li>
          <li><button>My Applications</button></li>
          <li><button>Contact</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default EmployeeDashboard;
