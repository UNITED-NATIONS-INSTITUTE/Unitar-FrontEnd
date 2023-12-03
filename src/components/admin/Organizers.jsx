// organizers.js
import { useState } from "react";

const Organizers = () => {
  const [showOrganizersTable, setShowOrganizersTable] = useState(false);

  // Placeholder data for organizers (replace with actual data)
  const organizersData = [
    { id: 1, name: "Organizer 1", email: "organizer1@example.com", approved: true },
    { id: 2, name: "Organizer 2", email: "organizer2@example.com", approved: false },
    // Add more organizer data as needed
  ];

  const handleToggleOrganizersTable = () => {
    setShowOrganizersTable(!showOrganizersTable);
  };

  return (
    <div className="organizers-container">
      <h2>Organizers</h2>

      {/* Button to show/hide organizers table */}
      <button onClick={handleToggleOrganizersTable} className="toggle-organizers-btn">
        {showOrganizersTable ? "Hide Organizers" : "Show Organizers"}
      </button>

      {/* Display organizers table when the button is clicked */}
      {showOrganizersTable && (
        <div className="organizers-table">
          <h3>Organizers Table</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Approved</th>
              </tr>
            </thead>
            <tbody>
              {organizersData.map((organizer) => (
                <tr key={organizer.id}>
                  <td>{organizer.id}</td>
                  <td>{organizer.name}</td>
                  <td>{organizer.email}</td>
                  <td>{organizer.approved ? "Approved" : "Not Approved"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Add more organizer-related information or components as needed */}
    </div>
  );
};

export default Organizers;
