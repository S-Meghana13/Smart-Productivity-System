import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/CreateTask.css';
const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found! Please log in.");
      // Optionally redirect to login
      navigate('/login');
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title, description, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/dashboard');
    } catch (error) {
      console.error(
        'Error creating task:',
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="task-form">
      <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1>Title</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <h1 className="text-xl font-semibold mb-4">Description</h1>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        /><br />
        <h1 className="text-xl font-semibold mb-4">Status</h1>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div className='button-1'>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Task
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default CreateTask;
