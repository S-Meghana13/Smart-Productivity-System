/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Pencil, Trash } from 'lucide-react';

const ViewTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/tasks/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTask(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = () => {
    navigate(`/tasks/update/${id}`);
  };

  if (!task) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{task.title}</h2>
      <p className="mb-2 text-gray-700">{task.description}</p>
      <p className="text-sm mb-1">Status: <span className="font-medium">{task.status}</span></p>
      <p className="text-sm mb-4 text-gray-500">Created: {new Date(task.createdAt).toLocaleString()}</p>

      <div className="flex space-x-4">
        <button
          onClick={handleUpdate}
          className="flex items-center bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
        >
          <Pencil className="mr-2" /> Update
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          <Trash className="mr-2" /> Delete
        </button>
      </div>
    </div>
  );
};

export default ViewTask;
*/

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Pencil, Trash } from 'lucide-react';
// import '../../styles/ViewTask.css'

// const ViewTask = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [task, setTask] = useState(null);

//   useEffect(() => {
//     const fetchTask = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`http://localhost:5000/api/tasks/${id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setTask(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchTask();
//   }, [id]);

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this task?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleUpdate = () => {
//     navigate(`/tasks/update/${id}`);
//   };

//   if (!task) return <div className="p-6 text-center">Loading...</div>;

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
//       <h3>View Task</h3>
//       <span className="font-semibold">Title:</span><br />
//       <h2 className="text-3xl font-bold text-blue-600 mb-4">{task.title}</h2>
//       <span className="font-semibold">Description:</span>
//       <p className="mb-4 text-gray-700">{task.description}</p>
//       <p className="text-sm text-gray-500 mb-6">
//         <span className="font-semibold">Status:</span> {task.status}
//       </p>

//       <div className="flex space-x-4">
//         <button
//           onClick={handleUpdate}
//           className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
//         >
//           <Pencil className="w-4 h-4 mr-2" />
//           Edit
//         </button>

//         <button
//           onClick={handleDelete}
//           className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//         >
//           <Trash className="w-4 h-4 mr-2" />
//           Delete
//         </button>
//       </div>
 
//     </div>
//   );
// };

// export default ViewTask;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Pencil, Trash } from 'lucide-react';
import '../../styles/ViewTask.css';

const ViewTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/tasks/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTask(res.data);
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/dashboard');
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleUpdate = () => {
    navigate(`/tasks/update/${id}`);
  };
  const handleSetGoal = () => {
    navigate(`/tasks/${id}/goal`);
  };
  

  if (!task) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="view-task-container">
      <h3 className="view-task-header">View Task</h3>

      <div className="mb-4">
        <span className="view-task-label">Title:</span>
        <p className="view-task-content">{task.title}</p>
      </div>

      <div className="mb-4">
        <span className="view-task-label">Description:</span>
        <p className="view-task-content">{task.description}</p>
      </div>

      <div className="mb-4">
       <span className="view-task-label">Status:</span>
        <p className="view-task-content"> {task.status}</p>
      </div>

      <div className="task-button-group">
        <button onClick={handleUpdate} className="task-button edit-button bg-blue-500 text-white hover:bg-blue-600">
          <Pencil size={16} />
          Edit
        </button>
        <button onClick={handleDelete} className="task-button delete-button bg-red-500 text-white hover:bg-red-600">
          <Trash size={16} />
          Delete
        </button>
      </div>
      <button onClick={() => navigate(`/tasks/${id}/goal`)} className="btn-set-goal">
    🎯 Set Goal & Reminder
  </button>
    </div>
  );
};

export default ViewTask;
