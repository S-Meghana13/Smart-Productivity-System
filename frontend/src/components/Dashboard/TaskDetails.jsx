import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LogTimeToTask from "../LogTimeToTask";

const TaskDetails = () => {
  const { taskId } = useParams();  // Get taskId from URL params
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`/api/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <h3>Time Logged</h3>
      {task.timeLogs.length === 0 ? (
        <p>No time logged yet.</p>
      ) : (
        <ul>
          {task.timeLogs.map((log, index) => (
            <li key={index}>
              {log.minutes} minutes logged on {new Date(log.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <LogTimeToTask taskId={taskId} />
    </div>
  );
};

export default TaskDetails;
