import React from "react";
import { Outlet } from "react-router-dom";
import UserProfile from "../../participants/profile/UserProfile";
import OpenHackathon from "./OpenHackathon";

const HackathonDashboard = () => {
  return (
    <>
      <div className="overflow-y-auto  lg:ml-60 bg-white p-8 right-side min-h-screen">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px]">Hackathons</h1>
          <div className="hidden xl:flex">
            <UserProfile />
          </div>
        </div>
        <div className="md:mt-10 mt-5">
          <h1 className="text-gray-600 font-semibold md:text-sm text-[18px]">
            Open Hackathons
          </h1>
          <OpenHackathon />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HackathonDashboard;
