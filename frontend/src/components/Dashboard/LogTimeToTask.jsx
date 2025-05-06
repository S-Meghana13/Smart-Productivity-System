import React, { useState } from "react";
import axios from "axios";

const LogTimeToTask = ({ taskId }) => {
  const [minutes, setMinutes] = useState(0);

  const handleLogTime = async (e) => {
    e.preventDefault();

    if (minutes <= 0) {
      alert("Please enter a valid number of minutes.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/tasks/${taskId}/log-time`, // ✅ Updated URL
        { minutes },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      alert("Time logged successfully!");
      setMinutes(0);
    } catch (error) {
      console.error("Error logging time:", error);
      alert("Error logging time.");
    }
  };

  return (
    <div className="log-time-to-task">
      <h3>Log Time for Task: {taskId}</h3>
      <form onSubmit={handleLogTime}>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min="1"
            required
          />
        </label>
        <button type="submit">Log Time</button>
      </form>
    </div>
  );
};

export default LogTimeToTask;
