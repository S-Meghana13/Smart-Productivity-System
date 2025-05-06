import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css';
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Replace with your own credentials check
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("role", "admin");
      navigate("/admindashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="flex-c">
    <div className="login-form">
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login as Admin</button>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;
