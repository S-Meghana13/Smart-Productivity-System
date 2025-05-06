// src/components/admin/AdminDashboard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard.css"; // Optional styling
import { LogOut } from "lucide-react"; 
const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear auth tokens or session data here
    navigate("/"); // Redirect to homepage
  };


  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-cards">
        <button onClick={() => navigate("/manage-users")}>Manage Users</button>
        <button onClick={() => navigate("/admin/monitor")}>Monitor Productivity</button>
        <button onClick={() => navigate("/admin/taskrules")}>Modify Task Rules</button>
        <button onClick={() => navigate("/admin/generate-reports")}>Generate Reports</button>
        <div className="logout">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut style={{ marginRight: "8px" }} />
          Logout
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
