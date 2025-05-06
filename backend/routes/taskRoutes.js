/*

import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  logTimeToTask,
  getProductivityForTask,
  getProductivitySummary
} from "../controllers/taskController.js";

import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Task CRUD
router.post("/", verifyToken, createTask);
router.get("/", verifyToken, getTasks);
router.get("/:id", verifyToken, getTaskById);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

// Productivity Features
router.post("/:id/log-time", verifyToken, logTimeToTask);             // Log time to a task
router.get("/:id/productivity", verifyToken, getProductivityForTask); // Get total time + logs for one task
router.get("/analytics/summary", verifyToken, getProductivitySummary); // (Optional) Total across all tasks


export default router;
*/

import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  logTimeToTask,
  getProductivityForTask,
  getProductivityInsights ,
  saveGoalAndReminder,
  getGoalAndReminder// Include insights controller
} from "../controllers/taskController.js";

import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Task CRUD
router.post("/", verifyToken, createTask);
router.get("/", verifyToken, getTasks);
router.get("/:id", verifyToken, getTaskById);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

// Productivity Analytics Routes - place these BEFORE dynamic :id routes
router.get("/analytics/insights", verifyToken, getProductivityInsights);// New insights route

// Task-specific routes - placed after static routes
router.post("/:id/log-time", verifyToken, logTimeToTask);
router.get("/:id/productivity", verifyToken, getProductivityForTask);
// Route to save goal and reminder for a task
//router.post("/:id/goal", verifyToken,saveGoalAndReminder);
router.post("/:id/goal", verifyToken, (req, res, next) => {
  console.log("Goal route hit for task ID:", req.params.id);
  next();
}, saveGoalAndReminder);
router.get("/:id/goal", verifyToken, getGoalAndReminder);

// Route to get procrastination insights for a task
//router.get("/:id/procrastination-insights", getProcrastinationInsights);


export default router;
