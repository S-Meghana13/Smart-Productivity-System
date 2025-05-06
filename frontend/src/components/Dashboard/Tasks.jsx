/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PlusCircle } from 'lucide-react';  // Install this package to use icons

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks');
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="tasks-dashboard">
      <div className="create-task-btn">
        <Link to="/tasks/create">
          <button><PlusCircle size={24} /> Create Task</button>
        </Link>
      </div>

      <div className="tasks-list">
        {tasks.map(task => (
          <div key={task._id} className="task-title">
            <Link to={`/tasks/${task._id}`}>
              <button className="task-card">{task.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;*/



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Tasks.css';
import { PlusCircle } from 'lucide-react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="tasks-dashboard p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <div className='create-b'>
        <Link to="/tasks/create">
          <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            <PlusCircle className="mr-2" size={18} />
            Create Task
          </button>
        </Link>
        </div>
      </div>

      <div className="grid gap-4">
        {tasks.map(task => (
          <div key={task._id} className='flex-d'>
            <Link to={`/tasks/${task._id}`}>
              {/* <button className=" text-left bg-gray-100 p-3 rounded hover:bg-gray-200">
                {task.title}
              </button> */}
              <button className="task-button">
                  {task.title}
              </button>

              

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
