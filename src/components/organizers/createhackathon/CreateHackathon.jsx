import React from "react";
import CreateHackSidebar from "./CreateHackSidebar";
import CreateHackathonContent from "./CreateHackathonContent";

const CreateHackathon = () => {
  return (
    <div>
      <CreateHackSidebar />
      <div className="bg-white p-8 right-side min-h-screen">
        <CreateHackathonContent />
      </div>
    </div>
  );
};

export default CreateHackathon;
