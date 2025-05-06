// controllers/adminController.js
import Task from "../models/Task.js";
import User from "../models/User.js";

// controllers/adminController.js
import TaskRules from '../models/TaskRules.js';

export const getAdminProductivityReport = async (req, res) => {
  try {
    const report = await Task.aggregate([
      { $unwind: "$timeLogs" }, // Flatten timeLogs array

      {
        $group: {
          _id: "$userId",
          totalMinutes: { $sum: "$timeLogs.minutes" },
          totalTasks: { $addToSet: "$_id" }, // Unique task IDs
        },
      },
      {
        $project: {
          userId: "$_id",
          totalMinutes: 1,
          totalHours: { $divide: ["$totalMinutes", 60] },
          tasksCompleted: { $size: "$totalTasks" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      { $unwind: "$userInfo" },
      {
        $project: {
         userName: "$userInfo.username",
          totalHours: 1,
          tasksCompleted: 1,
          productivityScore: {
            $round: [
              {
                $cond: [
                  { $eq: ["$tasksCompleted", 0] },
                  0,
                  {
                    $multiply: [
                      { $divide: ["$totalMinutes", "$tasksCompleted"] },
                      1.5, // scoring factor
                    ],
                  },
                ],
              },
              2,
            ],
          },
        },
      },
    ]);

    res.status(200).json(report);
  } catch (error) {
    console.error("Error generating productivity report:", error);
    res.status(500).json({ message: "Failed to generate report" });
  }
};


// Get predefined task categories and statuses
// Get predefined task categories and statuses
export const getTaskRules = async (req, res) => {
  try {
    const rules = await TaskRules.findOne(); // Only one document should exist
    if (!rules) {
      return res.status(404).json({ message: "No task rules found" });
    }
    res.status(200).json(rules); // Returning the single rules document
  } catch (error) {
    console.error("Error fetching task rules:", error);
    res.status(500).json({ message: "Failed to fetch task rules" });
  }
};
export const updateTaskRules = async (req, res) => {
  const { categories, statuses } = req.body;

  // Validate that both categories and statuses are arrays
  if (!Array.isArray(categories) || !Array.isArray(statuses)) {
    return res.status(400).json({ message: "Categories and statuses must be arrays" });
  }

  let rules = await TaskRules.findOne();

  if (!rules) {
    // If no rules exist, create a new TaskRules document
    rules = new TaskRules({ categories, statuses });
  } else {
    // Update the existing document
    rules.categories = categories;
    rules.statuses = statuses;
  }

  await rules.save(); // Save the updated/created document
  res.status(200).json(rules); // Return the updated rules
};

// controllers/adminController.js

// export const generateDetailedReport = async (req, res) => {
//   const { userId, startDate, endDate } = req.body;

//   try {
//     const matchStage = {
//       $match: {
//         createdAt: {
//           $gte: new Date(startDate),  // Start date filter
//           $lte: new Date(endDate),    // End date filter
//         },
//       },
//     };

//     // Add userId filter if provided
//     if (userId) {
//       matchStage.$match.userId = userId;
//     }

//     const report = await Task.aggregate([
//       matchStage,  // Apply the match stage dynamically
//       { $unwind: "$timeLogs" },  // Unwind the time logs
//       {
//         $group: {
//           _id: {
//             userId: "$userId",  // Group by userId, category, and status
//             category: "$category",
//             status: "$status",
//           },
//           totalMinutes: { $sum: "$timeLogs.minutes" },  // Sum the total time
//           tasks: { $addToSet: "$_id" },  // Collect task IDs for counting
//         },
//       },
//       {
//         $lookup: {
//           from: "users",  // Join with the users collection
//           localField: "_id.userId",
//           foreignField: "_id",
//           as: "userInfo",
//         },
//       },
//       { $unwind: "$userInfo" },  // Unwind user data
//       {
//         $project: {
//           userName: {
//             $ifNull: ["$userInfo.fullname", "$userInfo.username"]
//           },
//           category: "$_id.category",
//           status: "$_id.status",
//           totalHours: { $round: [{ $divide: ["$totalMinutes", 60] }, 2] },  // Convert minutes to hours
//           taskCount: { $size: "$tasks" },  // Count the number of tasks
//         },
//       },
//       { $sort: { userName: 1, category: 1, status: 1 } },  // Sort the results
//     ]);

//     res.status(200).json(report);  // Send the generated report as JSON
//   } catch (error) {
//     console.error("Error generating detailed report:", error);
//     res.status(500).json({ message: "Failed to generate detailed report" });
//   }
// };

import mongoose from "mongoose";

export const generateDetailedReport = async (req, res) => {
  const { userId, startDate, endDate } = req.body;

  try {
    const matchStage = {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    };

    if (userId) {
      matchStage.$match.userId = new mongoose.Types.ObjectId(userId);
    }

    const report = await Task.aggregate([
      matchStage,
      { $unwind: "$timeLogs" },
      {
        $group: {
          _id: {
            userId: "$userId",
            category: "$category",
            status: "$status",
          },
          totalMinutes: { $sum: "$timeLogs.minutes" },
          tasks: { $addToSet: "$_id" },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id.userId",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      { $unwind: "$userInfo" },
      {
        $project: {
          userName: "$userInfo.fullname",
          category: "$_id.category",
          status: "$_id.status",
          totalHours: { $round: [{ $divide: ["$totalMinutes", 60] }, 2] },
          taskCount: { $size: "$tasks" },
        },
      },
    ]);

    res.status(200).json(report);
  } catch (err) {
    console.error("Error generating report:", err);
    res.status(500).json({ message: "Failed to generate report", error: err });
  }
};
