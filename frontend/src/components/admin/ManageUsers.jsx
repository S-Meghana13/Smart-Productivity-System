// src/components/admin/ManageUsers.jsx
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/ManageUsers.css";





const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ fullname: "", email: "", role: "" });


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Assuming you're storing the JWT token in localStorage
        }
      });
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setEditedUser({ fullname: user.fullname, email: user.email, role: user.role });

  };


  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/users/${id}`,
        editedUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Pass the token for auth
          }
        }
      );
      setEditingUserId(null);
      fetchUsers(); // Refresh the users list
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(
          `http://localhost:5000/api/admin/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Pass the token for auth
            }
          }
        );
        fetchUsers(); // Refresh the users list
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
            
              <td>
                {editingUserId === user._id ? (
                  <input
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user._id ? (
                  <select
                    value={editedUser.role}
                    onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingUserId === user._id ? (
                  <>
                    <div className="style-b">
                    <button onClick={() => handleUpdate(user._id)}>Save</button>
                    <button onClick={() => setEditingUserId(null)}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="style-b">
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    </div>
                    <div className="style-b">
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="m-btn">
      <Link to="/admindashboard" className="dashboard-link">
        Go to Dashboard
      </Link>
      </div>
    </div>

  );
};

export default ManageUsers;
