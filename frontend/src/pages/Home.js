
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Home.css";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="home-section">
     

      <div className="hero" id="home">
        <br />
        <br />
        <h1>Welcome to Smart Productivity Tracker</h1>
        <p>Track your time, avoid distractions, and boost productivity.</p>
        {/* Add Get Started button */}
        <Link to="/signup">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>

      <Testimonials />
       {/* Features Section */}
       <div className="features-section" id="features">
        <h2 className="features-title">
          <span className="highlight">Our Features</span>
        </h2>
        <div className="features-list">
          <div className="feature-card">✔ Task Management (Create, View, Update, Delete)</div>
          <div className="feature-card">✔ Productivity Tracking with Time Logs</div>
          <div className="feature-card">✔ AI-generated Productivity Insights</div>
          <div className="feature-card">✔ Goal Setting & Daily Reminders</div>
          <div className="feature-card">✔ Profile Management with Avatar Upload</div>
        </div>
      </div>
<div>
      <section class="about-us-full" id="about">
  <div class="about-content">
    <h2>About Us</h2>
    <p>
      At Smart Productivity Tracker, we believe that productivity isn't about doing more—it's about doing what matters most.
    </p>
    <p>
      Our platform empowers individuals, students, and teams to stay focused, manage their time efficiently, and eliminate distractions. With AI-powered insights, intuitive task management, and personalized productivity tips, we’re redefining how people achieve their goals.
    </p>
    <p>
      Whether you're working remotely, studying for exams, or leading a team, our tool adapts to your workflow and helps you track progress in real-time. We combine simplicity with smart technology to make productivity effortless and sustainable.
    </p>
    <p>
      Join us in building a smarter, more focused future—one task at a time.
    </p>
  </div>
</section>
</div>
<div className="section-gap"></div>
      {/* Spacer for visual gap */}
 <div className="section-contact" id="contact">
        <h2>Contact</h2>
        <p>
          If you have any questions or feedback, feel free to reach out to us at
          <strong> support@productivitytracker.com</strong><br />
          +91 7396299057.
        </p>
      </div>
       {/* Footer Section */}
       <footer className="footer">
        <div className="footer-content">
          <h3>Smart Productivity Tracker</h3>
          <p>
            Helping you track time, minimize distractions, and achieve your goals with AI-powered tools.
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Smart Productivity Tracker. All rights reserved.</p>
        </div>
      </footer>
      </div>

  );
};

export default Home;
