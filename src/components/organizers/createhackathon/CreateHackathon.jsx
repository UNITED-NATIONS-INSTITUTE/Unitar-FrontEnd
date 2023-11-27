import { TextField } from "@mui/material";
import React from "react";
import UserProfile from "../../common/UserProfile";

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
