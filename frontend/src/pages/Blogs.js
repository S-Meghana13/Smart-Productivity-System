// // Blogs.js

// import React, { useState } from "react";
// import "../styles/Blogs.css"; // Make sure to update this too

// const blogTips = [
//   { title: "Stay Consistent", description: "Build small habits daily for massive success.", image: "📅" },
//   { title: "Prioritize Tasks", description: "Focus on important, not just urgent tasks.", image: "✅" },
//   { title: "Take Regular Breaks", description: "Work smarter with scheduled breaks.", image: "⏰" },
//   { title: "Use Technology Wisely", description: "Tech should empower, not distract.", image: "📱" },
//   { title: "Set SMART Goals", description: "Be clear and specific about your goals.", image: "🎯" },
//   { title: "Reflect Daily", description: "Self-review sharpens your focus.", image: "📝" },
//   { title: "Learn New Skills", description: "Upskill continuously to stay ahead.", image: "🚀" },
//   { title: "Stay Organized", description: "Declutter your workspace and mind.", image: "📚" },
// ];

// const Blogs = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredTips = blogTips.filter(tip =>
//     tip.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="blogs-page">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to Our Tips & Blogs!</h1>
//         <p>Boost your productivity and skills with quick reads.</p>
//       </section>

//       {/* Search Section */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search Tips..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Cards Section */}
//       <div className="cards-wrapper">
//         {filteredTips.length > 0 ? (
//           filteredTips.map((tip, index) => (
//             <div className="card" key={index}>
//               <div className="card-icon">{tip.image}</div>
//               <h2>{tip.title}</h2>
//               <p>{tip.description}</p>
//               <button className="read-more">Read More</button>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No tips found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;


// Blogs.js

import React, { useState } from "react";
import "../styles/Blogs.css"; // Make sure your CSS matches the updated design

const blogTips = [
  { 
    title: "Stay Consistent", 
    short: "Build small habits daily for massive success.", 
    full: "Consistency compounds over time. Start with small achievable daily goals. Over weeks and months, these small steps create massive momentum.",
    image: "📅"
  },
  { 
    title: "Prioritize Tasks", 
    short: "Focus on important, not just urgent tasks.", 
    full: "Use methods like the Eisenhower Matrix to avoid getting caught up in less impactful tasks. Prioritize what truly moves you forward.",
    image: "✅"
  },
  { 
    title: "Take Regular Breaks", 
    short: "Work smarter with scheduled breaks.", 
    full: "Techniques like the Pomodoro method recommend a 5-minute break after every 25 minutes of work to maintain peak productivity.",
    image: "⏰"
  },
  { 
    title: "Use Technology Wisely", 
    short: "Tech should empower, not distract.", 
    full: "Block distracting apps and notifications during focus time. Use apps that assist, not hinder your workflow.",
    image: "📱"
  },
  { 
    title: "Set SMART Goals", 
    short: "Be clear and specific about your goals.", 
    full: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. They give clear direction and motivation.",
    image: "🎯"
  },
  { 
    title: "Reflect Daily", 
    short: "Self-review sharpens your focus.", 
    full: "Spend a few minutes daily journaling or reviewing your tasks. This builds self-awareness and constant improvement.",
    image: "📝"
  },
  { 
    title: "Learn New Skills", 
    short: "Upskill continuously to stay ahead.", 
    full: "In a fast-changing world, continuous learning is vital. Dedicate weekly time to online courses, books, or practical projects.",
    image: "🚀"
  },
  { 
    title: "Stay Organized", 
    short: "Declutter your workspace and mind.", 
    full: "A clean workspace enhances creativity and efficiency. Regularly organize your files, desk, and to-do lists.",
    image: "📚"
  },
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredTips = blogTips.filter((tip) =>
    tip.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // collapse if same card clicked again
    } else {
      setExpandedIndex(index); // expand new card
    }
  };

  return (
    <div className="blogs-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Tips & Blogs!</h1>
        <p>Boost your productivity and skills with quick reads.</p>
      </section>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Tips..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Blog Cards */}
      <div className="cards-wrapper">
        {filteredTips.map((tip, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <span className="card-icon">{tip.image}</span>
              <h2>{tip.title}</h2>
            </div>
            <p>{expandedIndex === index ? tip.full : tip.short}</p>
            <button onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
