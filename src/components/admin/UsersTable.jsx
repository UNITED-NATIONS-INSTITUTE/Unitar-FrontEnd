import  { useState } from "react";

const UsersTable = () => {
  // Placeholder data for users (replace with actual data)
  const usersData = [
    { id: 1, name: "User 1", email: "user1@example.com", role: "Admin" },
    { id: 2, name: "User 2", email: "user2@example.com", role: "User" },
    // Add more user data as needed
  ];

  // State to track the selected user for details
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    // Set the selected user for details
    setSelectedUser(user);
  };

  return (
    <div className="users-table-container">
      <h2>Users Table</h2>

      {/* Users Table */}
      <div className="users-table">
        <h3>Users Table</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleSelectUser(user)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected User Details */}
      {selectedUser && (
        <div className="selected-user-details">
          <h3>User Details</h3>
          <p>ID: {selectedUser.id}</p>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Role: {selectedUser.role}</p>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
