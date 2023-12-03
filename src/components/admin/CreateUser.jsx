import  { useState } from "react";
import PropTypes from "prop-types";

const CreateUser = ({ userData, onDeleteUser }) => {
  // State to track the selected user for deletion
  const [selectedUserToDelete, setSelectedUserToDelete] = useState(null);

  const handleSelectUserToDelete = (user) => {
    // Set the selected user for deletion
    setSelectedUserToDelete(user);
  };

  const handleDeleteUser = () => {
    // Call the onDeleteUser prop to delete the selected user
    if (selectedUserToDelete) {
      onDeleteUser(selectedUserToDelete.id);
      // Clear the selected user after deletion
      setSelectedUserToDelete(null);
    }
  };

  return (
    <div className="create-user-container">
      <h2>Create User</h2>

      {/* Users Table */}
      <div className="users-table">
        <h3>Users Table</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleSelectUserToDelete(user)}>Delete User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected User Details for Deletion */}
      {selectedUserToDelete && (
        <div className="selected-user-details">
          <h3>User Details</h3>
          <p>ID: {selectedUserToDelete.id}</p>
          <p>Name: {selectedUserToDelete.name}</p>
          <p>Email: {selectedUserToDelete.email}</p>
          <button onClick={handleDeleteUser}>Confirm Delete</button>
        </div>
      )}
    </div>
  );
};

CreateUser.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default CreateUser;
