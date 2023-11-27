import React from "react";
import CreateHackSidebar from "./CreateHackSidebar";
import CreateHackathonContent from "./CreateHackathonContent";

const CreateHackathon = () => {
  return (
    <div>
      <CreateHackSidebar />
      <div className="bg-white p-8 right-side min-h-screen">
        <div className="ml-60">
          <CreateHackathonContent />
        </div>
      </div>
    </div>
  );
};

export default CreateHackathon;
