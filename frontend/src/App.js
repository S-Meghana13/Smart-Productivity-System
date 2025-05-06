/*import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateTask from "./components/Dashboard/CreateTask";
import ProductivityInsights from "./components/Dashboard/ProductivityInsights";
import ViewTask from "./components/Dashboard/ViewTask";
import UpdateTask from "./components/Dashboard/UpdateTask";
import TrackProductivity from "./components/Dashboard/TrackProductivity";
import Dashboard from './pages/Dashboard';
import LogTimeToTask from './components/Dashboard/LogTimeToTask';
import { UserContext } from "./context/UserContext"; // Import UserContext

const App = () => {
  const { token } = useContext(UserContext); // Access token from context

  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/:id" element={<ViewTask />} />
        <Route path="/tasks/update/:id" element={<UpdateTask />} />
        <Route path="/productivity" element={<TrackProductivity />} />
        <Route path="/tasks/:id/log-time" element={<LogTimeToTask />} />
        <Route path="/insights" element={<ProductivityInsights token={token} />} />  {/* Pass token }
      </Routes>
    </Router>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname === "/" ? <Navbar /> : null;
};

export default App;
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import SignInSelector from "./pages/SignInSelector";
import AdminLogin from "./pages/AdminLogin"; 
import CreateTask from "./components/Dashboard/CreateTask";
import ProductivityInsights from "./components/Dashboard/ProductivityInsights";
import ViewTask from "./components/Dashboard/ViewTask";
import UpdateTask from "./components/Dashboard/UpdateTask";
import TrackProductivity from "./components/Dashboard/TrackProductivity";
import Dashboard from './pages/Dashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageUsers from './components/admin/ManageUsers'
import LogTimeToTask from './components/Dashboard/LogTimeToTask'; // Import your LogTimeToTask component
import SetGoalsandReminders from "./components/Dashboard/SetGoalsandReminders";
import GoalsandReminders from "./components/Dashboard/GoalsandReminders";
import MonitorProductivity from "./components/admin/MonitorProductivity";
import ModifyTaskRules from './components/admin/ModifyTaskRules';
import GenerateReports from "./components/admin/GenerateReports";



const App = () => {
  const token = localStorage.getItem("token");  // Get the token from localStorage

  return (
    <>
      <ConditionalNavbar />  {/* ✅ Navbar appears only on Home and About pages*/ }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signinselector" element={<SignInSelector />} />
        <Route path="/admin-login" element={<AdminLogin />} />  {/* Admin login */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/:id" element={<ViewTask />} />
        <Route path="/tasks/update/:id" element={<UpdateTask />} />
        <Route path="/productivity" element={<TrackProductivity />} />
        <Route path="/tasks/:id/log-time" element={<LogTimeToTask />} />  {/* New route for LogTimeToTask*/}
        <Route path="/insights" element={<ProductivityInsights token={token} />} />  {/* Pass token to ProductivityInsights */}
        <Route path="/admin/taskrules" element={<ModifyTaskRules />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/admin/monitor" element={<MonitorProductivity />} />
        <Route path="/tasks/:id/goal" element={<SetGoalsandReminders token={token} />} />
        <Route path="/blogs" element={<Blogs />} /> {/* Add this */}
        <Route path="/tasks/:id/goal" element={<GoalsandReminders token={token} />} />
        <Route path="/admin/generate-reports" element={<GenerateReports />} />
      </Routes>
    </>
  );
};

//✅ Function to Show Navbar Only on Home & About Pages
const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname === "/"  ? <Navbar /> : null;
};

export default App;

