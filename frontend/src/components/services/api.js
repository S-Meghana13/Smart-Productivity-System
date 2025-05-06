// src/services/api.js
/*import axios from 'axios';
const fetchAIInsights = async (token) => {
  try {
    const response = await fetch("http://localhost:5000/api/tasks/analytics/insights", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch AI insights");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in fetching AI insights:", err);
    throw err;
  }
};

// Add this function to save goals and reminders
export const saveGoalAndReminder = async (taskId, goal, reminderDate) => {
  try {
    const response = await axios.post(`/tasks/${taskId}/goals`, { goal, reminderDate });
    return response.data;
  } catch (error) {
    console.error("Error saving goal and reminder:", error);
    throw error;
  }
};

// Add this function to fetch procrastination insights
export const fetchProcrastinationInsights = async (taskId) => {
  try {
    const response = await axios.get(`/tasks/${taskId}/procrastination-insights`);
    return response.data;
  } catch (error) {
    console.error("Error fetching procrastination insights:", error);
    throw error;
  }
};


//export { fetchAIInsights };
export { fetchAIInsights, saveGoalAndReminder, fetchProcrastinationInsights };*/

// src/services/api.js
// src/services/api.js
//import axios from 'axios';

// Function for fetching AI insights
/*const fetchAIInsights = async (token) => {
  try {
    const response = await fetch("http://localhost:5000/api/tasks/analytics/insights", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch AI insights");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in fetching AI insights:", err);
    throw err;
  }
};




const saveGoalAndReminder = async (taskId, goalData, token) => {
  try {
    // Ensure taskId is not undefined
    if (!taskId) {
      throw new Error("Task ID is missing");
    }

    // Using environment variable for the base URL
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
    
    const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/goal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(goalData),
    });

    if (!response.ok) {
      const errorText = await response.text() || 'Unknown error occurred';
      console.error("Backend error response:", errorText);
      throw new Error(`Failed to save goal and reminder: ${errorText}`);
    }

    const data = await response.json();
    console.log("Goal and Reminder saved successfully:", data);

    // Return a success message along with the data
    return { success: true, message: "Goal and Reminder saved successfully", data };
  } catch (err) {
    console.error("Error saving goal and reminder:", err.message || err);
    throw new Error(`An error occurred while saving the goal and reminder: ${err.message || err}`);
  }
};


//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export const fetchGoalAndReminder = async (taskId, token) => {
  try {

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
    const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/goal`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch goal and reminder");
    }

    const data = await response.json();
    console.log("Fetched Goal and Reminder:", data);
    return data;

  } catch (error) {
    console.error("Error fetching goal and reminder:", error);
    throw error;
  }
};


// Exporting all functions in one statement
//export { fetchAIInsights, saveGoalAndReminder , fetchGoalAndReminder};


export { fetchAIInsights, saveGoalAndReminder, fetchGoalAndReminder };
*/




// Fetch AI Insights
const fetchAIInsights = async (token) => {
  try {
    const response = await fetch("http://localhost:5000/api/tasks/analytics/insights", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch AI insights");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in fetching AI insights:", err);
    throw err;
  }
};

// Save Goal and Reminder
const saveGoalAndReminder = async (taskId, goalData, token) => {
  try {
    if (!taskId) {
      throw new Error("Task ID is missing");
    }

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
    
    const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/goal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(goalData),
    });

    if (!response.ok) {
      const errorText = await response.text() || 'Unknown error occurred';
      console.error("Backend error response:", errorText);
      throw new Error(`Failed to save goal and reminder: ${errorText}`);
    }

    const data = await response.json();
    console.log("Goal and Reminder saved successfully:", data);
    return { success: true, message: "Goal and Reminder saved successfully", data };
  } catch (err) {
    console.error("Error saving goal and reminder:", err.message || err);
    throw new Error(`An error occurred while saving the goal and reminder: ${err.message || err}`);
  }
};

// Fetch Goal and Reminder
const fetchGoalAndReminder = async (taskId, token) => {
  try {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
    const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/goal`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch goal and reminder");
    }

    const data = await response.json();
    console.log("Fetched Goal and Reminder:", data);
    return data;
  } catch (error) {
    console.error("Error fetching goal and reminder:", error);
    throw error;
  }
};

// Export all functions in one statement (only once)
export { fetchAIInsights, saveGoalAndReminder, fetchGoalAndReminder };
