import React from "react";
import Sidebar from "./Sidebar";
import ParticipantsContent from "./ParticipantsContent";

const ParticipantDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-white p-8 right-side">
        <ParticipantsContent />
      </div>
    </div>
  );
};

export default ParticipantDashboard;
