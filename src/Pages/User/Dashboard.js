import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        navigate("/user/login"); // Not logged in
        return;
      }

      const role = data.user.user_metadata?.role;

      if (role === "employer") {
        navigate("/user/employer-dashboard");
      } else {
        navigate("/user/employee-dashboard");
      }
    };

    checkRole();
  }, [navigate]);

  return (
    <div className="dashboard-redirect">
      {loading && <p>Loading your dashboard...</p>}
    </div>
  );
};

export default Dashboard;
