// ParticipantProfile.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const participants = () => {
  const [showParticipants, setShowParticipants] = useState(false);

  // Placeholder data for participants (replace with actual data)
  const participantsData = [
    { id: 1, name: "Participant 1", email: "participant1@example.com" },
    { id: 2, name: "Participant 2", email: "participant2@example.com" },
    // Add more participant data as needed
  ];

  const handleShowParticipants = () => {
    setShowParticipants(!showParticipants);
  };

  return (
    <div className="participant-profile-container">
      <h2>Participant Profile</h2>
      {/* Add participant profile information here */}
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>

      {/* Button to show/hide participants table */}
      <button onClick={handleShowParticipants} className="show-participants-btn">
        {showParticipants ? "Hide Participants" : "Show Participants"}
      </button>

      {/* Display participants table when the button is clicked */}
      {showParticipants && (
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

export default participants;
