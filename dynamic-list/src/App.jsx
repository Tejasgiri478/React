import React, { useState } from "react";
import "./App.css";
import Data from "./Data";

function App() {
  const [users, setUsers] = useState(Data); // Manage user list
  const [editingUser, setEditingUser] = useState(null); // Track editing user
  const [newName, setNewName] = useState(""); // Track new name input

  // Delete user function
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Enable edit mode
  const enableEdit = (user) => {
    setEditingUser(user.id);
    setNewName(user.name);
  };

  // Save edited name
  const saveEdit = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: newName } : user
      )
    );
    setEditingUser(null);
  };

  return (
    <div className="container mx-auto mt-5 p-5 bg-fuchsia-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-neutral-900 mb-4">
        User List
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-fuchsia-400 text-neutral-900">
              <th className="p-3 border border-gray-300">ID</th>
              <th className="p-3 border border-gray-300">Photo</th>
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white hover:bg-fuchsia-100 transition-all"
              >
                <td className="p-3 text-center border border-gray-300">
                  {user.id}
                </td>
                <td className="p-3 text-center border border-gray-300">
                  <img
                    src={user.photo}
                    alt="User"
                    className="w-20 h-16 rounded-md shadow-md"
                  />
                </td>
                <td className="p-3 text-right border border-gray-300 font-medium">
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="border rounded p-1"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="p-3 text-center border border-gray-300">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:text-red-800 text-xl mx-2"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  {editingUser === user.id ? (
                    <button
                      onClick={() => saveEdit(user.id)}
                      className="text-green-600 hover:text-green-800 text-xl mx-2"
                    >
                      ✅
                    </button>
                  ) : (
                    <button
                      onClick={() => enableEdit(user)}
                      className="text-blue-600 hover:text-blue-800 text-xl mx-2"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-3 text-gray-600">
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
