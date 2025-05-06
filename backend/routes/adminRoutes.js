

import express from "express";
import Task from "../models/Task.js";
import User from "../models/User.js";
import { getAdminProductivityReport , generateDetailedReport, getTaskRules, updateTaskRules} from '../controllers/adminController.js';

const router = express.Router();


// Backend Route: GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "fullname  email role _id"); // Fetch only fullname and _id
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();  // Fetch all tasks
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// UPDATE user
router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE user
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET Productivity Trends
router.get("/productivity", getAdminProductivityReport);


// Add this route
router.get("/taskrules", getTaskRules);
router.put("/taskrules", updateTaskRules);

// NEW route for generating detailed reports

// ✅ POST route to generate reports
router.post("/generate-reports", generateDetailedReport);


export default router;
