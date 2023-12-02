import React from "react";
import OrgSubmissionsTable from "./OrgSubmissionsTable";
import UserProfile from "../participants/profile/UserProfile";

const OrgSubmissions = () => {
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="ml-60">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px] mb-8 ">
            Submissions
          </h1>
          <UserProfile />
        </div>
        <p className="text-xs text-gray-500  flex flex-row mb-10">
          <span>Submissions</span>
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px] "
            alt="chevron"
          />
          <span>Build4SDGs</span>
        </p>
        <div className="mb-10">
          <OrgSubmissionsTable />
        </div>
      </div>
    </div>
  );
};

export default OrgSubmissions;
