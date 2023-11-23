import React from "react";
import Navbar from "./Navbar";

const SignUpPrompt = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-custom-blue pb-40  ">
          <h2 className="mb-6 font-semibold">
            Join as participant or an organizer
          </h2>
          <div className="flex space-x-4 pt-10">
            <button className="flex-1 bg-custom-blue text-white py-2 mt-4 rounded hover:bg-blue-600 text-xs  ">
              for participants
            </button>
            <button className="flex-1 border border-custom-blue  py-2 mt-4 rounded hover:bg-blue-500 text-xs ">
              for organizers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPrompt;
