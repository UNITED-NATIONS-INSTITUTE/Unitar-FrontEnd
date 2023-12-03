// HackathonsPage.js
import React, { useState } from "react";

const hackathons = () => {
  // Placeholder data for hackathons (replace with actual data)
  const hackathonsData = [
    { id: 1, name: "Hackathon 1", startDate: new Date("2023-12-10"), status: "Not Started" },
    { id: 2, name: "Hackathon 2", startDate: new Date("2023-11-15"), status: "Started" },
    // Add more hackathon data as needed
  ];

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
      {/* Add more hackathon-related information or components as needed */}
    </div>
  );
};

export default hackathons;
