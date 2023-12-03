// Participants.js
import  { useState } from "react";

const Participants = () => {
  const [showParticipantsTable, setShowParticipantsTable] = useState(false);

  // Placeholder data for participants (replace with actual data)
  const participantsData = [
    { id: 1, name: "Participant 1", email: "participant1@example.com" },
    { id: 2, name: "Participant 2", email: "participant2@example.com" },
    // Add more participant data as needed
  ];

  const handleToggleParticipantsTable = () => {
    setShowParticipantsTable(!showParticipantsTable);
  };

  return (
    <div className="participants-container">
      <h2>Participants</h2>

      {/* Button to show/hide participants table */}
      <button onClick={handleToggleParticipantsTable} className="toggle-participants-btn">
        {showParticipantsTable ? "Hide Participants" : "Show Participants"}
      </button>

      {/* Display participants table when the button is clicked */}
      {showParticipantsTable && (
        <div className="participants-table">
          <h3>Participants Table</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {participantsData.map((participant) => (
                <tr key={participant.id}>
                  <td>{participant.id}</td>
                  <td>{participant.name}</td>
                  <td>{participant.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Add more participant-related information or components as needed */}
    </div>
  );
};

export default Participants;
