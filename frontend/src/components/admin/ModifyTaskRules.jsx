import { useEffect, useState } from "react";
import axios from "axios";
import '../../styles/ModifyTaskRules.css';
import { Link } from "react-router-dom";

const ModifyTaskRules = () => {
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/taskrules").then((res) => {
      setCategories(res.data.categories || []);
      setStatuses(res.data.statuses || []);
    });
  }, []);

  const saveRules = () => {
    axios.put("http://localhost:5000/api/admin/taskrules", { categories, statuses }).then(() =>
      alert("Rules updated successfully!")
    );
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Modify Task Rules</h2>

      {/* Categories */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Categories</label>
        <ul className="mb-2">
          {categories.map((cat, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>{cat}</span>
              <div className="style-b">
              <button
                onClick={() => setCategories(categories.filter((_, idx) => idx !== i))}
                className="text-red-500">Delete</button>
                </div>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category"
          className="border p-2 mr-2"
        />
        <div className="s-btn">
        <button
          onClick={() => {
            if (newCategory.trim()) {
              setCategories([...categories, newCategory]);
              setNewCategory("");
            }
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded">Add</button></div>
      </div>

      {/* Statuses */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Statuses</label>
        <ul className="mb-2">
          {statuses.map((status, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>{status}</span>
              <div className="style-b">
              <button
                onClick={() => setStatuses(statuses.filter((_, idx) => idx !== i))}
                className="text-red-500">Delete</button>
                </div>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          placeholder="New status"
          className="border p-2 mr-2"
        />
        <button
          onClick={() => {
            if (newStatus.trim()) {
              setStatuses([...statuses, newStatus]);
              setNewStatus("");
            }
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
      </div>
<div>
      <button onClick={saveRules} className="bg-green-600 text-white px-4 py-2 rounded">
        Save Rules
      </button></div>
      <div className="m-btn">
<Link to="/admindashboard" className="dashboard-link">
  Go to Dashboard
</Link>
</div>
     
    </div>
    
    
  );
};



export default ModifyTaskRules;
