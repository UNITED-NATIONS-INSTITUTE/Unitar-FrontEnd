import React from "react";
import Sidebar from "./Sidebar";
import ParticipantsContent from "./ParticipantsContent";

const ParticipantDashboard = () => {
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <ParticipantsContent />
    </div>
  );
};

export default ParticipantDashboard;
