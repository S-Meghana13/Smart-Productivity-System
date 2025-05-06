/*import Task from "../models/Task.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    console.log("Authenticated user ID:", req.userId); // Adjusted to match your middleware

    const newTask = new Task({
      title,
      description,
      status,
      userId: req.userId, // use decoded token info from middleware
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get All Tasks (for logged-in user)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Task by ID (only if owned by user)
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Task (only if owned by user)
export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Task (only if owned by user)
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Logs how many minutes a user spent on a task.
export const logTimeToTask = async (req, res) => {
  try {
    const { minutes } = req.body; // Time spent in minutes

    if (!minutes || minutes <= 0) {
      return res.status(400).json({ message: "Invalid minutes provided." });
    }

    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    // Add time log for this task
    task.timeLogs.push({ minutes });
    await task.save(); // Save updated task

    res.status(200).json({ message: "Time logged successfully", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Log time to a task (only if owned by user)
// Logs how many minutes a user spent on a task.
// Logs how many minutes a user spent on a task.
export const logTimeToTask = async (req, res) => {
  try {
    const { minutes } = req.body; // Time spent in minutes

    if (!minutes || minutes <= 0) {
      return res.status(400).json({ message: "Invalid minutes provided." });
    }

    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    // Add time log for this task
    task.timeLogs.push({ minutes });
    await task.save(); // Save updated task

    res.status(200).json({ message: "Time logged successfully", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get Productivity for a Specific Task
export const getProductivityForTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    const totalMinutes = task.timeLogs.reduce((sum, log) => sum + log.minutes, 0);

    res.status(200).json({
      taskId: task._id,
      title: task.title,
      totalMinutes,
      timeLogs: task.timeLogs
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Optional: Get Productivity Summary (All Tasks)
export const getProductivitySummary = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });

    let totalMinutes = 0;
    const taskSummaries = tasks.map(task => {
      const taskTotal = task.timeLogs.reduce((sum, log) => sum + log.minutes, 0);
      totalMinutes += taskTotal;

      return {
        taskId: task._id,
        title: task.title,
        totalMinutes: taskTotal
      };
    });

    res.status(200).json({
      totalTimeAcrossTasks: totalMinutes,
      taskSummaries
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/
import Task from "../models/Task.js";
//const { generateInsight } = require("../utils/aiModel");
// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    console.log("Authenticated user ID:", req.userId); // Adjusted to match your middleware

    const newTask = new Task({
      title,
      description,
      status,
      userId: req.userId, // use decoded token info from middleware
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get All Tasks (for logged-in user)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Task by ID (only if owned by user)
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Task (only if owned by user)
export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Task (only if owned by user)
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//Logs how many minutes a user spent on a task.
export const logTimeToTask = async (req, res) => {
  try {
    const { minutes } = req.body;

    if (!minutes || minutes <= 0) {
      return res.status(400).json({ message: "Invalid minutes provided." });
    }

    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    task.timeLogs.push({ minutes });
    await task.save();

    res.status(200).json({ message: "Time logged successfully", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get Productivity for a Specific Task
export const getProductivityForTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    const totalMinutes = task.timeLogs.reduce((sum, log) => sum + log.minutes, 0);

    res.status(200).json({
      taskId: task._id,
      title: task.title,
      totalMinutes,
      timeLogs: task.timeLogs
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export const getProductivityInsights = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: Missing user ID" });
    }

    const tasks = await Task.find({ userId });

    let totalMinutes = 0;
    const dayMap = {};
    const categoryMap = {};
    const taskSummaries = [];

    tasks.forEach(task => {
      if (!Array.isArray(task.timeLogs)) return;

      let taskMinutes = 0;

      task.timeLogs.forEach(log => {
        const minutes = log.minutes || 0;
        taskMinutes += minutes;
        totalMinutes += minutes;

        const logDate = log.date ? new Date(log.date) : new Date();
        const day = logDate.toLocaleDateString("en-US", { weekday: "long" });
        dayMap[day] = (dayMap[day] || 0) + minutes;

        const category = task.category || "Uncategorized";
        categoryMap[category] = (categoryMap[category] || 0) + minutes;
      });

      taskSummaries.push({
        taskId: task._id,
        title: task.title,
        totalMinutesSpent: taskMinutes,
      });
    });

    // Determine insights
    const mostProductiveDay = Object.entries(dayMap).sort((a, b) => b[1] - a[1])[0] || ["N/A", 0];
    const topCategory = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0] || ["Uncategorized", 0];

    const score = Math.min(100, Math.round(totalMinutes / 5)); // Example scoring logic

    const suggestions = [];
    if (score < 30) suggestions.push("Try to log more task time regularly.");
    if (topCategory[0] === "Uncategorized") suggestions.push("Assign categories to your tasks for better insights.");
    if (!mostProductiveDay || mostProductiveDay[1] < 30) suggestions.push("Aim for more focused work blocks.");

    const summary = `You spent ${totalMinutes} minutes across ${tasks.length} tasks. Most productive day: ${mostProductiveDay[0]}. Top focus: ${topCategory[0]}.`;

    res.status(200).json({
      trends: `Most productive on ${mostProductiveDay[0]} with ${mostProductiveDay[1]} minutes. Top category: ${topCategory[0]}`,
      score,
      suggestions,
      summary,
      totalMinutesSpent: totalMinutes,
      taskSummaries,
    });
  } catch (error) {
    console.error("Error in getAIProductivityInsights:", error.message);
    res.status(500).json({ message: "Internal server error: " + error.message });
  }
};


// controllers/taskController.js
// export const saveGoalAndReminder = async (req, res) => {
//   try {
//     const taskId = req.params.id;
//     const { goal, reminder } = req.body;

//     // Validation for required fields
//     if (!goal || !reminder) {
//       return res.status(400).json({ message: "Goal and Reminder must be provided" });
//     }

//     // Task ownership check
//     const task = await Task.findOne({ _id: taskId, userId: req.userId });
//     if (!task) {
//       return res.status(404).json({ message: "Task not found or you don't have permission to edit this task" });
//     }

//     // Update goal and reminder
//     task.goal = goal;
//     task.reminder = reminder;
//     await task.save();

//     // Send the updated task object or just relevant fields
//     res.status(200).json({ message: "Goal and reminder saved successfully", task });
//   } catch (error) {
//     console.error("Failed to save goal and reminder:", error.message);
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };
export const saveGoalAndReminder = async (req, res) => {
  try {
    console.log("Incoming Request Body:", req.body);
    console.log("Task ID from params:", req.params.id);
    console.log("User ID from middleware:", req.userId);

    const taskId = req.params.id;
    const { goal, reminder } = req.body;

    if (!goal || !reminder) {
      return res.status(400).json({ message: "Goal and reminder are required" });
    }

    if (!taskId || !req.userId) {
      return res.status(400).json({ message: "Task ID or User ID is missing" });
    }

    const task = await Task.findOne({ _id: taskId, userId: req.userId });

    if (!task) {
      console.log("No task found!");
      return res.status(404).json({ message: "Task not found" });
    }

    console.log("Task found, updating goal and reminder...");

    /*task.goal = goal;*/
    task.goal = JSON.stringify(goal);

    task.reminder = reminder;

    await task.save();

    console.log("Goal and reminder saved successfully!");
    res.status(200).json({ message: "Goal and reminder saved successfully", task });

  } catch (error) {
    console.error("Error inside saveGoalAndReminder:", error);
    res.status(500).json({ message: error.message || "Server error. Please try again later." });
  }
};



// Get Goal and Reminder for a Task
export const getGoalAndReminder = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.userId;

    const task = await Task.findOne({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Only return goal and reminder
    res.status(200).json({ goal: task.goal, reminder: task.reminder });

  } catch (error) {
    console.error("Error fetching goal and reminder:", error);
    res.status(500).json({ message: "Server error while fetching goal and reminder" });
  }
};





// Get Procrastination Insights (based on delay data)
/*const getProcrastinationInsights = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    // Generate procrastination insights based on delay data
    const delayData = {
      dates: ["2025-04-16", "2025-04-17", "2025-04-18"], // Example dates
      delays: [1.5, 2, 2.5], // Example delays in hours
    };

    const insights = generateInsight(delayData.delays, delayData.dates);

    res.status(200).json({ insights });
  } catch (error) {
    console.error("Error generating procrastination insights:", error);
    res.status(500).json({ message: error.message });
  }
};


*/