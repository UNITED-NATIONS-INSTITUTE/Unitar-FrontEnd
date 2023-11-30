import React from "react";
import UserProfile from "../common/UserProfile";
import OrgHackathons from "./OrgHackathons";
const OrgDashboard = () => {
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="overflow-y-auto  ml-60">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px]">Dashboard</h1>
          <UserProfile />
        </div>
        <div className="flex mt-12">
          <div className="border bg-custom-blue rounded-md text-white pr-20 pt-5 mr-5">
            <span className="text-xs p-5">Total participants</span>
            <p className="p-5 font-bold">524</p>
          </div>
          <div className="border bg-custom-grey rounded-md  pr-20  pt-5 mr-5">
            <span className="text-xs p-5">Total projects</span>
            <p className="p-5 font-bold">50</p>
          </div>
          <div className="border bg-custom-grey rounded-md  pr-20  pt-5 mr-5">
            <span className="text-xs p-5">Submitted projects</span>
            <p className="p-5 font-bold">5</p>
          </div>
          <div className="border bg-custom-grey rounded-md  pr-20  pt-5 mr-5">
            <span className="text-xs p-5">Total organizers</span>
            <p className="p-5 font-bold">50</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-gray-600 font-semibold">Ongoing hackathons</h1>
          <h3 className="mt-3 text-sm font-bold">Hackathons</h3>
          <p className="text-gray-500 text-xs mt-2">
            Submitted projects are listed here
          </p>
          <OrgHackathons />
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;
