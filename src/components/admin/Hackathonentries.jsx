// HackathonEntryPage.js
import  { useState } from "react";

const Hackathonentries = () => {
  const [participantName, setParticipantName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleEntrySubmit = () => {
    // Handle submission logic here (e.g., sending data to the server)
    console.log("Hackathon Entry Submitted:", {
      participantName,
      projectTitle,
      projectDescription,
    });

    // Clear form fields after submission
    setParticipantName("");
    setProjectTitle("");
    setProjectDescription("");
  };

  return (
    <div className="hackathon-entry-page-container">
      <h2>Hackathon Entry Page</h2>

      <div className="entry-form">
        <label htmlFor="participantName">Participant Name:</label>
        <input
          type="text"
          id="participantName"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
        />

        <label htmlFor="projectTitle">Project Title:</label>
        <input
          type="text"
          id="projectTitle"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />

        <label htmlFor="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />

        <button onClick={handleEntrySubmit}>Submit Entry</button>
      </div>
    </div>
  );
};

export default Hackathonentries;
