import React from "react";
import HackathonsPage from "../participants/HackathonsPage";
import UserProfile from "../common/UserProfile";

const OrgHackathonPage = () => {
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="ml-60">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-gray-600 font-bold  text-[24px]">Hackathons</h1>
            <UserProfile />
          </div>
          <button className="text-xs bg-custom-blue rounded-lg mt-10 mb-5 border w-[150px] text-white font-semibold p-3">
            Create a hackathon
          </button>
          <span className="text-gray-600 font-semibold text-sm ">
            Our Hackathons
          </span>
        </div>
        <HackathonsPage />
      </div>
    </div>
  );
};

export default OrgHackathonPage;