import React from "react";
import Sidebar from "../hackathon/Sidebar";
import UserProfile from "../common/UserProfile";
import HackDetailsPart1 from "./HackDetailsPart1";
import HackDetailsPart2 from "./HackDetailsPart2";

const HackathonDetailsPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-white p-8 right-side ml-60">
        <div>
          <div className="flex justify-between">
            <h1 className="mt-0 text-gray-600 font-bold mb-10 text-[20px] ">
              Hackathons
            </h1>
            <UserProfile />
          </div>
          <div className="flex gap-[100px]">
            <div>
              <HackDetailsPart1 />
            </div>
            <div>
              <HackDetailsPart2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailsPage;
