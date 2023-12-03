import  { useState } from "react";

const Hackathons = () => {
  // Placeholder data for hackathons (replace with actual data)
  const hackathonsData = [
    { id: 1, name: "Hackathon 1", startDate: new Date("2023-12-10"), status: "Not Started" },
    { id: 2, name: "Hackathon 2", startDate: new Date("2023-11-15"), status: "Started" },
    // Add more hackathon data as needed
  ];

  // State to track the selected hackathon
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const handleSelectHackathon = () => {
    // Set the selected hackathon to the first one in the list
    setSelectedHackathon(hackathonsData[0]);
  };

  return (
    <div className="hackathons-page-container">
      <h2>Hackathons Page</h2>

      {/* Display hackathons table */}
      <div className="hackathons-table">
        <h3>Hackathons Table</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {hackathonsData.map((hackathon) => (
              <tr key={hackathon.id}>
                <td>{hackathon.id}</td>
                <td>{hackathon.name}</td>
                <td>{hackathon.startDate.toLocaleDateString()}</td>
                <td>{hackathon.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button to select the first hackathon */}
      <button onClick={handleSelectHackathon}>Select First Hackathon</button>

      {/* Display selected hackathon information */}
      {selectedHackathon && (
        <div className="selected-hackathon-info">
          <h3>Selected Hackathon</h3>
          <p>Name: {selectedHackathon.name}</p>
          <p>Start Date: {selectedHackathon.startDate.toLocaleDateString()}</p>
          <p>Status: {selectedHackathon.status}</p>
        </div>
      )}

      {/* Add more hackathon-related information or components as needed */}
    </div>
  );
};

export default Hackathons;
