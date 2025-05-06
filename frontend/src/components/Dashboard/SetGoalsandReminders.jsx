// /*import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
// import { fetchProcrastinationInsights, saveGoalAndReminder } from "../services/api";
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
// ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

// const SetGoalsAndReminders = ({ token }) => {
//   const { id: taskId } = useParams(); // ✅ get taskId from URL
//   console.log('Task ID:', taskId); // Log to check if taskId is correctly fetched
//   const [goal, setGoal] = useState({ title: "", description: "", dueDate: "", priority: "Medium" });
//   const [reminder, setReminder] = useState({ frequency: "Daily", time: "09:00 AM" });
//   const [procrastinationData, setProcrastinationData] = useState(null);
//   const [patterns, setPatterns] = useState([]);
  
//   useEffect(() => {
//     // Fetch procrastination insights and productivity patterns from AI
//     fetchProcrastinationInsights(token)
//       .then(data => {
//         setProcrastinationData(data.insights);
//         setPatterns(data.patterns);
//       })
//       .catch(err => console.error('Error fetching insights:', err));
//   }, [token]);

//   const handleSaveGoalAndReminder = () => {
//     if (!taskId) {
//       console.error("Task ID is missing from URL.");
//       return;
//     }
  
//     saveGoalAndReminder(taskId, { goal, reminder }, token)
//       .then(response => {
//         console.log("Goal and Reminder saved successfully:", response);
//       })
//       .catch(err => console.error('Error saving goal and reminder:', err));
//   };
  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name in goal) {
//       setGoal({ ...goal, [name]: value });
//     } else {
//       setReminder({ ...reminder, [name]: value });
//     }
//   };

//   const goalForm = (
//     <div className="goal-form">
//       <h2 className="text-xl font-semibold">Set Your Productivity Goal</h2>
//       <input
//         type="text"
//         name="title"
//         value={goal.title}
//         placeholder="Goal Title"
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <textarea
//         name="description"
//         value={goal.description}
//         placeholder="Goal Description"
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <input
//         type="datetime-local"
//         name="dueDate"
//         value={goal.dueDate}
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <select
//         name="priority"
//         value={goal.priority}
//         onChange={handleInputChange}
//         className="input-field"
//       >
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <button onClick={handleSaveGoalAndReminder} className="save-btn">Save Goal</button>
//     </div>
//   );

//   const reminderForm = (
//     <div className="reminder-form">
//       <h2 className="text-xl font-semibold">Set Reminder Frequency</h2>
//       <select
//         name="frequency"
//         value={reminder.frequency}
//         onChange={handleInputChange}
//         className="input-field"
//       >
//         <option value="Daily">Daily</option>
//         <option value="Weekly">Weekly</option>
//         <option value="Custom">Custom</option>
//       </select>
//       <input
//         type="time"
//         name="time"
//         value={reminder.time}
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <button onClick={handleSaveGoalAndReminder} className="save-btn">Save Reminder</button>
//     </div>
//   );

//   const procrastinationAnalysis = (
//     <div className="procrastination-analysis">
//       <h2 className="text-xl font-semibold">Procrastination Detection</h2>
//       {procrastinationData && (
//         <div>
//           <p>{procrastinationData.alerts}</p>
//           <div className="productivity-chart">
//             <Line
//               data={{
//                 labels: procrastinationData.dates,
//                 datasets: [{
//                   label: 'Time Delayed in Task Completion (hrs)',
//                   data: procrastinationData.delays,
//                   borderColor: 'rgba(255, 99, 132, 0.2)',
//                   backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 }]
//               }}
//               options={{ responsive: true, plugins: { title: { display: true, text: 'Delays in Task Completion' }}}}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const productivityPatterns = (
//     <div className="productivity-patterns">
//       <h2 className="text-xl font-semibold">Your Productivity Patterns</h2>
//       <div>
//         <ul>
//           {patterns.map((pattern, idx) => (
//             <li key={idx}>{pattern}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">
//       {goalForm}
//       {reminderForm}
//       {procrastinationAnalysis}
//       {productivityPatterns}
//     </div>
//   );
// };

// export default SetGoalsAndReminders;
// */


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // ✅ Import useParams at the top level
// import { fetchProcrastinationInsights, saveGoalAndReminder } from "../services/api";

// const SetGoalsandReminders = ({ token }) => {
//   const { id: taskId } = useParams(); // ✅ Extract taskId from URL params using useParams
//   console.log('Task ID:', taskId); // Check taskId in console
  
//   const [goal, setGoal] = useState({ title: "", description: "", dueDate: "", priority: "Medium" });
//   const [reminder, setReminder] = useState({ frequency: "Daily", time: "09:00 AM" });

//   useEffect(() => {
//     if (taskId) {
//       // Logic if you need to fetch procrastination insights or something else
//     } else {
//       console.error("Task ID is missing from URL.");
//     }
//   }, [taskId, token]);

//   const handleSaveGoalAndReminder = () => {
//     if (!taskId) {
//       console.error("Task ID is missing from URL.");
//       return;
//     }

//     // Save the goal and reminder using the task ID
//     saveGoalAndReminder(taskId, { goal, reminder }, token)
//       .then(response => {
//         console.log("Goal and Reminder saved successfully:", response);
//       })
//       .catch(err => console.error('Error saving goal and reminder:', err));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name in goal) {
//       setGoal({ ...goal, [name]: value });
//     } else {
//       setReminder({ ...reminder, [name]: value });
//     }
//   };

//   const goalForm = (
//     <div className="goal-form">
//       <h2 className="text-xl font-semibold">Set Your Productivity Goal</h2>
//       <input
//         type="text"
//         name="title"
//         value={goal.title}
//         placeholder="Goal Title"
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <textarea
//         name="description"
//         value={goal.description}
//         placeholder="Goal Description"
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <input
//         type="datetime-local"
//         name="dueDate"
//         value={goal.dueDate}
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <select
//         name="priority"
//         value={goal.priority}
//         onChange={handleInputChange}
//         className="input-field"
//       >
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <button onClick={handleSaveGoalAndReminder} className="save-btn">Save Goal</button>
//     </div>
//   );

//   const reminderForm = (
//     <div className="reminder-form">
//       <h2 className="text-xl font-semibold">Set Reminder Frequency</h2>
//       <select
//         name="frequency"
//         value={reminder.frequency}
//         onChange={handleInputChange}
//         className="input-field"
//       >
//         <option value="Daily">Daily</option>
//         <option value="Weekly">Weekly</option>
//         <option value="Custom">Custom</option>
//       </select>
//       <input
//         type="time"
//         name="time"
//         value={reminder.time}
//         onChange={handleInputChange}
//         className="input-field"
//       />
//       <button onClick={handleSaveGoalAndReminder} className="save-btn">Save Reminder</button>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">
//       {goalForm}
//       {reminderForm}
//     </div>
//   );
// };

// export default SetGoalsandReminders;

/*import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { saveGoalAndReminder } from "../services/api";

const SetGoalsandReminders = ({ token }) => {
  const location = useLocation(); // Use location hook to get the full URL
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    // Extract taskId from the URL path
    const pathSegments = location.pathname.split('/');
    const idFromUrl = pathSegments[pathSegments.length - 2]; // Should be the taskId
    setTaskId(idFromUrl);

    console.log('Task ID:', idFromUrl); // Log the task ID to confirm

    if (!idFromUrl) {
      console.error("Task ID is missing from URL.");
    }
  }, [location]);

  const [goal, setGoal] = useState({ title: "", description: "", dueDate: "", priority: "Medium" });
  const [reminder, setReminder] = useState({ frequency: "Daily", time: "09:00 AM" });

  const handleSaveGoalAndReminder = () => {
    if (!taskId) {
      console.error("Task ID is missing from URL.");
      return;
    }

    saveGoalAndReminder(taskId, { goal, reminder }, token)
      .then(response => {
        console.log("Goal and Reminder saved successfully:", response);
      })
      .catch(err => console.error('Error saving goal and reminder:', err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in goal) {
      setGoal({ ...goal, [name]: value });
    } else {
      setReminder({ ...reminder, [name]: value });
    }
  };

  const goalForm = (
    <div className="goal-form">
      <h2 className="text-xl font-semibold">Set Your Productivity Goal</h2>
      <input
        type="text"
        name="title"
        value={goal.title}
        placeholder="Goal Title"
        onChange={handleInputChange}
        className="input-field"
      />
      <textarea
        name="description"
        value={goal.description}
        placeholder="Goal Description"
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="datetime-local"
        name="dueDate"
        value={goal.dueDate}
        onChange={handleInputChange}
        className="input-field"
      />
      <select
        name="priority"
        value={goal.priority}
        onChange={handleInputChange}
        className="input-field"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleSaveGoalAndReminder} className="save-btn">Save Goal</button>
    </div>
  );

  const reminderForm = (
    <div className="reminder-form">
      <h2 className="text-xl font-semibold">Set Reminder Frequency</h2>
      <select
        name="frequency"
        value={reminder.frequency}
        onChange={handleInputChange}
        className="input-field"
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Custom">Custom</option>
      </select>
      <input
        type="time"
        name="time"
        value={reminder.time}
        onChange={handleInputChange}
        className="input-field"
      />
      <button onClick={handleSaveGoalAndReminder} className="save-btn">Save Reminder</button>
    </div>
  );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-6">
      {goalForm}
      {reminderForm}
    </div>
  );
};

export default SetGoalsandReminders;*/



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom'; 
// import { saveGoalAndReminder } from "../services/api";

// const SetGoalsandReminders = ({ token }) => {
//   const location = useLocation();
//   const [taskId, setTaskId] = useState(null);

//   useEffect(() => {
//     const pathSegments = location.pathname.split('/');
//     const idFromUrl = pathSegments[pathSegments.length - 2]; // Get task ID
//     setTaskId(idFromUrl);

//     if (!idFromUrl) {
//       console.error("Task ID is missing from URL.");
//     }
//   }, [location]);

//   const [goal, setGoal] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "Medium"
//   });

//   const [reminder, setReminder] = useState({
//     frequency: "Daily",
//     time: "09:00"
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name in goal) {
//       setGoal({ ...goal, [name]: value });
//     } else if (name in reminder) {
//       setReminder({ ...reminder, [name]: value });
//     }
//   };

//   const handleSaveGoalAndReminder = () => {
//     if (!taskId) {
//       console.error("Task ID is missing from URL.");
//       return;
//     }

//     const combinedReminderDateTime = new Date(`${goal.dueDate}T${reminder.time}`);

//     saveGoalAndReminder(taskId, {
//       goal: `${goal.title} - ${goal.description}`,
//       reminder: combinedReminderDateTime
//     }, token)
//       .then(response => {
//         console.log("Goal and Reminder saved successfully:", response);
//         alert("Goal and Reminder saved successfully!");
//       })
//       .catch(err => {
//         console.error('Error saving goal and reminder:', err);
//         alert("Failed to save. Check console.");
//       });
//   };

//   return (
//     <div>
//       <h2>Set Goal and Reminder</h2>
//       <input
//         type="text"
//         name="title"
//         placeholder="Goal Title"
//         value={goal.title}
//         onChange={handleInputChange}
//       /><br />

//       <textarea
//         name="description"
//         placeholder="Goal Description"
//         value={goal.description}
//         onChange={handleInputChange}
//       /><br />

//       <input
//         type="date"
//         name="dueDate"
//         value={goal.dueDate}
//         onChange={handleInputChange}
//       /><br />

//       <select name="priority" value={goal.priority} onChange={handleInputChange}>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select><br />

//       <label>Reminder Time: </label>
//       <input
//         type="time"
//         name="time"
//         value={reminder.time}
//         onChange={handleInputChange}
//       /><br />

//       <button onClick={handleSaveGoalAndReminder}>Save Goal & Reminder</button>
//     </div>
//   );
// };

// export default SetGoalsandReminders;
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { saveGoalAndReminder } from "../services/api";

// const SetGoalsandReminders = ({ token }) => {
//   const { id } = useParams(); // this must match ":id" in your Route path
//   const navigate = useNavigate();

//   const taskId = id;
//   console.log("Task ID from URL:", taskId); // Should NOT be undefined

//   const [goal, setGoal] = useState({
//     title: "",
//     description: "",
//     dueDate: "",
//     priority: "Medium"
//   });

//   const [reminder, setReminder] = useState({
//     frequency: "Daily",
//     time: "09:00"
//   });

//   useEffect(() => {
//     if (!taskId) {
//       console.error("Task ID is missing from URL.");
//     }
//   }, [taskId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name in goal) {
//       setGoal({ ...goal, [name]: value });
//     } else if (name in reminder) {
//       setReminder({ ...reminder, [name]: value });
//     }
//   };

//   const handleSaveGoalAndReminder = async () => {
//     if (!taskId) {
//       alert("Task ID is missing.");
//       return;
//     }

//     const combinedReminderDateTime = `${reminder.frequency} - ${reminder.time}`;

//     try {
//       const result = await saveGoalAndReminder(taskId, {
//         goal: `${goal.title} - ${goal.description}`,
//         reminder: combinedReminderDateTime
//       }, token);

//       if (result.success) {
//         alert(result.message);
//         navigate(`/tasks/${taskId}`); // Go back to view task
//       } else {
//         alert("Failed to save. Please try again.");
//       }
//     } catch (err) {
//       console.error("Error occurred:", err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
//       <h3 className="text-2xl font-bold mb-4">Set Goal and Reminder</h3>
//       <input
//         type="text"
//         name="title"
//         placeholder="Goal Title"
//         value={goal.title}
//         onChange={handleInputChange}
//         className="border p-2 w-full mb-2"
//       />
//       <textarea
//         name="description"
//         placeholder="Goal Description"
//         value={goal.description}
//         onChange={handleInputChange}
//         className="border p-2 w-full mb-2"
//       />
//       <input
//         type="date"
//         name="dueDate"
//         value={goal.dueDate}
//         onChange={handleInputChange}
//         className="border p-2 w-full mb-2"
//       />
//       <select
//         name="priority"
//         value={goal.priority}
//         onChange={handleInputChange}
//         className="border p-2 w-full mb-2"
//       >
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>

//       <h4 className="text-xl font-semibold mt-4 mb-2">Reminder</h4>
//       <select
//         name="frequency"
//         value={reminder.frequency}
//         onChange={handleInputChange}
//         className="border p-2 w-full mb-2"
//       >
//         <option value="Daily">Daily</option>
//         <option value="Weekly">Weekly</option>
//       </select>
//       <input
//         type="time"
//         name="time"
//         value={reminder.time}
//         onChange={handleInputChange}
//         className="border p-2 w-full mb-4"
//       />

//       <button
//         onClick={handleSaveGoalAndReminder}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Save Goal & Reminder
//       </button>
//     </div>
//   );
// };

// export default SetGoalsandReminders;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { saveGoalAndReminder } from "../services/api";
import '../../styles/SetGoalsandReminders.css';
const SetGoalsandReminders = ({ token }) => {
  const { id } = useParams(); // this must match ":id" in your Route path
  const navigate = useNavigate();

  const taskId = id;
  console.log("Task ID from URL:", taskId); // Should NOT be undefined

  const [goal, setGoal] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium"
  });

  const [reminder, setReminder] = useState({
    frequency: "Daily",
    time: "09:00"
  });

  useEffect(() => {
    if (!taskId) {
      console.error("Task ID is missing from URL.");
    }
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in goal) {
      setGoal({ ...goal, [name]: value });
    } else if (name in reminder) {
      setReminder({ ...reminder, [name]: value });
    }
  };

 
  const handleSaveGoalAndReminder = async () => {
    if (!taskId) {
      alert("Task ID is missing.");
      return;
    }
  
    const goalData = {
      goal: {
        ...goal,
        dueDate: goal.dueDate,  // if you have dueDate
        priority: goal.priority // if you have priority
      },
      reminder: {
        frequency: reminder.frequency,
        time: reminder.time
      }
    };
  
    try {
      const response = await saveGoalAndReminder(taskId, goalData, token);
      console.log(response.message);
      alert("Goal and Reminder saved successfully");
      navigate("/dashboard");  // or wherever you want after save
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };
  
  return (
    <div className="goals-reminder-container">
      <h3 className="title">Set Goal and Reminder</h3>
      <input
        type="text"
        name="title"
        placeholder="Goal Title"
        value={goal.title}
        onChange={handleInputChange}
        className="input-field"
      />
      <textarea
        name="description"
        placeholder="Goal Description"
        value={goal.description}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="date"
        name="dueDate"
        value={goal.dueDate}
        onChange={handleInputChange}
        className="input-field"
      />
      <select
        name="priority"
        value={goal.priority}
        onChange={handleInputChange}
        className="input-field"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <h4 className="reminder-title">Reminder</h4>
      <select
        name="frequency"
        value={reminder.frequency}
        onChange={handleInputChange}
        className="input-field"
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
      </select>
      <input
        type="time"
        name="time"
        value={reminder.time}
        onChange={handleInputChange}
        className="input-field"
      />

      <button
        onClick={handleSaveGoalAndReminder}
        className="save-btn"
      >
        Save Goal & Reminder
      </button>
    </div>
  );
};

export default SetGoalsandReminders;
