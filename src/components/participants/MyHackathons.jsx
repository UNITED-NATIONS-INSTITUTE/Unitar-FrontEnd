import React from "react";
import SubmittedHackathon from "../hackathon/hackathonDashboard/SubmittedHackathon";
import UserProfile from "./profile/UserProfile";

const MyHackathons = () => {
  return (
    <div className="bg-white right-side min-h-screen  ">
      <div className=" ml-[280px]">
        <div className="flex justify-between mt-8">
          <h1 className="text-gray-600 font-bold text-[24px]">My Hackathons</h1>
          <div className="mr-10 ">
            <UserProfile />{" "}
          </div>
        </div>
        <div>
          <SubmittedHackathon />
        </div>
      </div>
    </div>
  );
};

export default MyHackathons;
