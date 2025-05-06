
// import React, { useState, useEffect } from 'react';
// //import { useParams, useNavigate } from 'react-router-dom';
// //import { fetchGoalAndReminder } from "../api"; // adjust path as needed
// import { fetchGoalAndReminder } from "../services/api";
// const GoalsandReminders = ({ taskId, token }) => {
//   const [goal, setGoal] = useState(null);
//   const [reminder, setReminder] = useState(null);

//   useEffect(() => {
//     const getGoalAndReminder = async () => {
//       try {
//         const data = await fetchGoalAndReminder(taskId, token);
//         setGoal(data.goal);
//         setReminder(data.reminder);
//       } catch (error) {
//         console.error("Error fetching goal and reminder:", error);
//       }
//     };

//     if (taskId) {
//       getGoalAndReminder();
//     }
//   }, [taskId, token]);

//   return (
//     <div>
//       <h2>Goal and Reminder</h2>
//       {goal ? (
//         <div>
//           <h3>Goal Title: {goal.title}</h3>
//           <p>Description: {goal.description}</p>
//           <p>Due Date: {goal.dueDate}</p>
//           <p>Priority: {goal.priority}</p>
//         </div>
//       ) : (
//         <p>No goal set yet.</p>
//       )}
      
//       {reminder ? (
//         <div>
//           <h3>Reminder Time: {new Date(reminder).toLocaleString()}</h3>
//         </div>
//       ) : (
//         <p>No reminder set yet.</p>
//       )}
//     </div>
//   );
// };

// export default GoalsandReminders;






import React, { useState, useEffect } from 'react';
import { fetchGoalAndReminder } from "../services/api";

const GoalsandReminders = ({ taskId, token }) => {
  const [goal, setGoal] = useState(null);
  const [reminder, setReminder] = useState(null);

  useEffect(() => {
    const getGoalAndReminder = async () => {
      try {
        const data = await fetchGoalAndReminder(taskId, token);
        setGoal(data.goal);
        setReminder(data.reminder);
      } catch (error) {
        console.error("Error fetching goal and reminder:", error);
      }
    };

    if (taskId) {
      getGoalAndReminder();
      console.log(taskId);
    }
  }, [taskId, token]);

  return (
    <div>
      <h2>Goal and Reminder</h2>

      {goal ? (
        <div>
          <h3>Goal Title: {goal.title}</h3>
          <p>Description: {goal.description}</p>
          <p>Due Date: {goal.dueDate ? new Date(goal.dueDate).toLocaleDateString() : "No due date"}</p>
          <p>Priority: {goal.priority}</p>
        </div>
      ) : (
        <p>No goal set yet.</p>
      )}

      {reminder ? (
        <div>
          <h3>Reminder Time: {new Date(reminder).toLocaleString()}</h3>
        </div>
      ) : (
        <p>No reminder set yet.</p>
      )}
    </div>
  );
};

export default GoalsandReminders;
