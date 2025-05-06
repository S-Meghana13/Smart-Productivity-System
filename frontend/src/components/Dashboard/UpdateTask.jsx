
// // UpdateTask.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const UpdateTask = () => {
//   const [task, setTask] = useState({ title: '', description: '', status: 'pending' });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTask = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`http://localhost:5000/api/tasks/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setTask(res.data);
//       } catch (err) {
//         console.error("Error fetching task:", err);
//       }
//     };
//     fetchTask();
//   }, [id]);

//   const handleChange = (e) => {
//     setTask({ ...task, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(`http://localhost:5000/api/tasks/${id}`, task, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       navigate('/dashboard');
//     } catch (err) {
//       console.error("Error updating task:", err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Update Task</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           value={task.title}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           name="description"
//           value={task.description}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//         <select
//           name="status"
//           value={task.status}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="pending">Pending</option>
//           <option value="in progress">In Progress</option>
//           <option value="completed">Completed</option>
//         </select>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Update Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateTask;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/UpdateTask.css'; // Assuming you saved the CSS from earlier

const UpdateTask = () => {
  const [task, setTask] = useState({ title: '', description: '', status: 'pending' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/tasks/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTask(res.data);
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:5000/api/tasks/${id}`, task, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard');
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className="update-task-container">
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit} className="update-task-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          rows={4}
          required
        />
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div className='s-button'>
        <button type="submit">Update Task</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
