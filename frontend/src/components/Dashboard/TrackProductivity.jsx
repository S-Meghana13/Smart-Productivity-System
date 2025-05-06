// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TrackProductivity = () => {
//   const [tasks, setTasks] = useState([]);
//   const [timeLogs, setTimeLogs] = useState({});

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://localhost:5000/api/tasks', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setTasks(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchTasks();
//   }, []);

//   const handleLogTime = async (taskId) => {
//     const minutes = prompt('Enter minutes spent on this task:');
//     if (!minutes || isNaN(minutes)) return alert('Enter valid number');

//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         `http://localhost:5000/api/tasks/${taskId}/log-time`,
//         { minutes: Number(minutes) },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert('Time logged successfully');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Productivity Analysis</h2>
//       {tasks.map((task) => (
//         <div
//           key={task._id}
//           className="bg-white shadow p-4 mb-4 rounded border border-gray-200"
//         >
//           <h3 className="text-xl font-semibold">{task.title}</h3>
//           <p>{task.description}</p>
//           <button
//             className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
//             onClick={() => handleLogTime(task._id)}
//           >
//             Log Time
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TrackProductivity;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/TrackProductivity.css';

const TrackProductivity = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const handleLogTime = async (taskId) => {
    const minutes = prompt('Enter minutes spent on this task:');
    if (!minutes || isNaN(minutes)) return alert('Enter a valid number');

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `http://localhost:5000/api/tasks/${taskId}/log-time`,
        { minutes: Number(minutes) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Time logged successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="track-container">
      <h2 className="track-header">Productivity Analysis</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-card">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.description}</p>
            <div className='l-button'>
            <button
              className="log-time-button"
              onClick={() => handleLogTime(task._id)}
            >
              Log Time
            </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TrackProductivity;
