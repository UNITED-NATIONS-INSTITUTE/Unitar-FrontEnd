import React from "react";
import Sidebar from "../hackathon/Sidebar";
import SubmitHackDetails from "./SubmitHackDetails";

const SubmitHackathon = () => {
  return (
    <div>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="bg-white p-8 right-side">
          <SubmitHackDetails />
        </div>
      </div>
    </div>
  );
};

export default SubmitHackathon;
