import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", { fullname, email, password });
      alert("Signup Successful");
      navigate("/signin");
    } catch {
      alert("Signup Failed");
    }
  };

  return (
    <div className="input-container">
      <div className="form-container">
        <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="Full Name" onChange={(e) => setFullname(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p>Already registered? <Link to="/signin">Sign In</Link></p>
    </div>
    </div>
  );
};

export default SignUp;
