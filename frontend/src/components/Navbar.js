import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="left">Productivity Tracker</div>
      <div className={`right ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/signinselector" onClick={() => setIsOpen(false)}>Sign In</Link>
        <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link> {/* Add this */}
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
<a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
};

export default Navbar;
