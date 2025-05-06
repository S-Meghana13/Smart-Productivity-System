// import React, { useState } from 'react';
// import '../styles/Dashboard.css';
// import Profile from '../components/Dashboard/Profile';
// import Tasks from '../components/Dashboard/Tasks';
// import TrackProductivity from '../components/Dashboard/TrackProductivity';
// import ProductivityInsights from '../components/Dashboard/ProductivityInsights';
// import SetGoalsandReminders from '../components/Dashboard/SetGoalsandReminders';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('Profile');

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case '👤 Profile':
//         return <Profile />;
//       case '📋 Tasks':
//         return <Tasks />;
//       case '⏱️ Track Productivity':
//         return <TrackProductivity />;
//       case '📊 Productivity Insights':
//         return <ProductivityInsights />;
//       case '🎯 Goals & Reminders':
//         return <SetGoalsandReminders />;
//       default:
//         return <Tasks />;
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <h2>Dashboard</h2>
//         <ul>
//           {['👤 Profile', '📋 Tasks', '⏱️ Track Productivity', '📊 Productivity Insights', '🎯 Goals & Reminders'].map(tab => (
//             <li
//               key={tab}
//               className={activeTab === tab ? 'active' : ''}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="main-content">
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// /*import React, { useState } from 'react';
// import Profile from '../components/Dashboard/Profile';
// //import './Dashboard.css'; // Custom CSS
// import '../styles/Dashboard.css';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('profile');

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
        
//         <ul>
//           <li onClick={() => setActiveTab('profile')}>Profile</li>
//           <li onClick={() => setActiveTab('tasks')}>Tasks</li>
//           <li onClick={() => setActiveTab('track')}>Track Productivity</li>
//           <li onClick={() => setActiveTab('insights')}>Productivity Insights</li>
//           <li onClick={() => setActiveTab('goals')}>Goals & Reminders</li>
//         </ul>
//       </div>
//       <div className="dashboard-content">
//         {activeTab === 'profile' && <Profile />}
//         {/* Add conditional rendering for other components here }
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// /*
// // src/pages/Dashboard.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Sidebar from '../components/Dashboard/Sidebar';
// import Profile from '../components/Dashboard/Profile';
// import Tasks from '../components/Dashboard/Tasks';
// import TrackProductivity from '../components/Dashboard/TrackProductivity';
// import ProductivityInsights from '../components/Dashboard/ProductivityInsights';
// import GoalsReminders from '../components/Dashboard/GoalsReminders';
// import '../styles/Dashboard.css';

// const Dashboard = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="ml-64 w-full p-6">
//         <Routes>
//           <Route path="profile" element={<Profile />} />
//           <Route path="tasks" element={<Tasks />} />
//           <Route path="track" element={<TrackProductivity />} />
//           <Route path="insights" element={<ProductivityInsights />} />
//           <Route path="goals" element={<GoalsReminders />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated to useNavigate
import '../styles/Dashboard.css';
import Profile from '../components/Dashboard/Profile';
import Tasks from '../components/Dashboard/Tasks';
import TrackProductivity from '../components/Dashboard/TrackProductivity';
import ProductivityInsights from '../components/Dashboard/ProductivityInsights';
import SetGoalsandReminders from '../components/Dashboard/SetGoalsandReminders';
import GoalsandReminders from '../components/Dashboard/GoalsandReminders';
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('👤 Profile');
  const navigate = useNavigate();  // Use useNavigate for navigation

  const handleLogout = () => {
    // Remove the authentication token from localStorage (or sessionStorage)
    localStorage.removeItem('authToken');  // Change to your token key if needed

    // Redirect the user to the home page (or login page)
    navigate('/');  // Use navigate instead of history.push()
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case '👤 Profile':
        return <Profile />;
      case '📋 Tasks':
        return <Tasks />;
      case '⏱️ Track Productivity':
        return <TrackProductivity />;
      case '📊 Productivity Insights':
        return <ProductivityInsights />;
   
      default:
        return <Tasks />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          {['👤 Profile', '📋 Tasks', '⏱️ Track Productivity', '📊 Productivity Insights'].map(tab => (
            <li
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
          {/* Logout Tab */}
          <li
            className="logout-tab"
            onClick={handleLogout}
          >
            🚪 Logout
          </li>
        </ul>
      </div>
      <div className="main-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
