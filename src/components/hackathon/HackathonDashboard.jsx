import React from "react";
import HackathonContent from "./HackathonContent";
import Sidebar from "./Sidebar";

const HackathonDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-white p-8 right-side">
        <HackathonContent />
      </div>
    </div>
  );
};

export default HackathonDashboard;
