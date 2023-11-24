import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SignUpPrompt = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = useState("");

  const handleChoice = (selectedChoice) => {
    setChoice(selectedChoice);
    if (selectedChoice === "ORGANIZER") {
      navigate("/org-signup"); //navigate to org sign in
    } else if (selectedChoice === "PARTICIPANT") {
      navigate("/part-signup"); //navigate to participant sign in
    }
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-custom-blue pb-40  ">
          <h2 className="mb-6">Join as participant or an organizer</h2>
          <div className="flex space-x-4 pt-10">
            <button
              onClick={() => handleChoice("PARTICIPANT")}
              className="flex-1 bg-custom-blue text-white py-2 mt-4 rounded hover:bg-blue-600 text-xs  "
            >
              for participants
            </button>
            <button
              onClick={() => handleChoice("ORGANIZER")}
              className="flex-1 btn-org  py-2 mt-4 rounded hover:bg-blue-500 text-xs "
            >
              for organizers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPrompt;
