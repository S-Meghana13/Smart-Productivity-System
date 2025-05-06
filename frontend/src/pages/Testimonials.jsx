
import React, { useState } from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    text: "This really helps you stay organized and productive through your whole day.",
    author: "M_Gonza",
  },
  {
    text: "The best productivity app. Helped me beat procrastination and stay on track!",
    author: "FocusFiend",
  },
  {
    text: "Great for setting daily goals and actually sticking to them!",
    author: "DisciplineDiva",
  },
  {
    text: "I love how the app tracks my productivity and gives insights to improve!",
    author: "TechSavvyTom",
  },
  {
    text: "Amazing interface and smooth functionality. Definitely a game changer for my routines.",
    author: "RoutineMaster",
  },
  {
    text: "This app keeps me motivated, and the reminders really help me stay on task.",
    author: "MotivatedMaya",
  },
  {
    text: "I’ve been able to accomplish so much more every day since I started using this app.",
    author: "EfficiencyExpert",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>
        Why users choose <span>Smart Productivity Tracker</span>
      </h2>
      <div className="slider">
        <button onClick={prev} className="arrow left">&#8592;</button>
        <div className="card">
          <p className="quote">“{testimonials[index].text}”</p>
          <p className="author">— {testimonials[index].author}</p>
        </div>
        <button onClick={next} className="arrow right">&#8594;</button>
      </div>
    </section>
  );
};

export default Testimonials;

