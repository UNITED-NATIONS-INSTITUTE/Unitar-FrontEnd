import React from "react";
import UserProfile from "../../common/UserProfile";
import OpenHackathon from "./OpenHackathon";
import SubmittedHackathon from "./SubmittedHackathon";

const HackathonContent = () => {
  return (
    <div className="overflow-y-auto  ml-60">
      <div className="flex justify-between">
        <h1 className="text-gray-600 font-bold text-lg">Hackathons</h1>
        <UserProfile />
      </div>
      <span className="text-xs text-gray-600 font-bold">
        Hackathons Submitted
      </span>
      <SubmittedHackathon />
      <div className="mt-10">
        <h1 className="text-gray-600 font-semibold text-sm">Open Hackathons</h1>
        <OpenHackathon />
      </div>
    </div>
  );
};

export default HackathonContent;
