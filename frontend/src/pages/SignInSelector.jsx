


import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInSelector.css"; // Make sure to create/import this CSS

function SignInSelector() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate("/signin");
  };

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <div className="containers">
      <div className="form-container">
        <h2>Select Login Type</h2>
        <div className="button-container">
          <button className="signin-option-button" onClick={handleUserLogin}>User Login</button>
          <button className="signin-option-button" onClick={handleAdminLogin}>Admin Login</button>
        </div>
      </div>
    </div>
  );
}

export default SignInSelector;

