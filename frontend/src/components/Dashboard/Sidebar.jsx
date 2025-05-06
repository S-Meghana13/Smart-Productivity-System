// src/components/Sidebar.jsx
/*import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white h-screen p-5 fixed">
      <div className="text-center mb-8">
        <img
          src="https://i.ibb.co/0jW3GzZ/avatar.png"
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="mt-2 text-lg font-semibold">Andrew Bennet</h2>
      </div>

      <nav className="flex flex-col space-y-4">
        <NavLink to="profile" className="hover:bg-blue-600 px-3 py-2 rounded flex items-center">
          👤 Profile
        </NavLink>
        <NavLink to="tasks" className="hover:bg-blue-600 px-3 py-2 rounded flex items-center">
          ✅ Tasks
        </NavLink>
        <NavLink to="track" className="hover:bg-blue-600 px-3 py-2 rounded flex items-center">
          ⏱️ Track Productivity
        </NavLink>
        <NavLink to="insights" className="hover:bg-blue-600 px-3 py-2 rounded flex items-center">
          📊 Receive Productivity Insights
        </NavLink>
        <NavLink to="goals" className="hover:bg-blue-600 px-3 py-2 rounded flex items-center">
          🎯 Set Goals & Reminders
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaUser,
  FaTasks,
  FaStopwatch,
  FaChartLine,
  FaBullseye
} from 'react-icons/fa'; // Icons from FontAwesome

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white h-screen p-5 fixed">
      <div className="text-center mb-8">
        <img
          src="https://i.ibb.co/0jW3GzZ/avatar.png"
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="mt-2 text-lg font-semibold">Andrew Bennet</h2>
      </div>

      <nav className="flex flex-col space-y-4">
        <NavLink
          to="profile"
          className="hover:bg-blue-600 px-3 py-2 rounded flex items-center gap-3"
        >
          <FaUser /> Profile
        </NavLink>
        <NavLink
          to="tasks"
          className="hover:bg-blue-600 px-3 py-2 rounded flex items-center gap-3"
        >
          <FaTasks /> Tasks
        </NavLink>
        <NavLink
          to="track"
          className="hover:bg-blue-600 px-3 py-2 rounded flex items-center gap-3"
        >
          <FaStopwatch /> Track Productivity
        </NavLink>
        <NavLink
          to="insights"
          className="hover:bg-blue-600 px-3 py-2 rounded flex items-center gap-3"
        >
          <FaChartLine /> Receive Productivity Insights
        </NavLink>
        <NavLink
          to="goals"
          className="hover:bg-blue-600 px-3 py-2 rounded flex items-center gap-3"
        >
          <FaBullseye /> Set Goals & Reminders
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
