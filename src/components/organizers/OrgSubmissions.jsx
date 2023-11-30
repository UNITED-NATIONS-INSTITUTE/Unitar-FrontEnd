import React from "react";
import OrgSubmissionsTable from "./OrgSubmissionsTable";
import UserProfile from "../common/UserProfile";

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
        <span className="text-sm font-semibold mb-2 ">
          Judge and Publish Winners
        </span>
        <div className="flex flex-row gap-[200px]">
          <div>
            <p className="text-xs mt-5 mb-2 font-semibold">Winner</p>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col">
                <label htmlFor="winner" className="text-xs mb-2">
                  Select participant
                </label>
                <select className="pr-[150px] py-2 text-xs  border-gray-400 border focus:outline-none focus:border-custom-blue rounded-md bg-inherit">
                  <option className="flex justify-start">Dennis Kim</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-2">Grade (out of 100)</label>
                <input
                  type="text"
                  required
                  className="border py-1 border-gray-400 w-[100px] focus:outline-none focus:border-custom-blue rounded-md bg-inherit"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs mt-5 mb-2 font-semibold">1st runners up</p>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col">
                <label htmlFor="winner" className="text-xs mb-2">
                  Select participant
                </label>
                <select className="pr-[150px] py-2 text-xs  border-gray-400 border focus:outline-none focus:border-custom-blue rounded-md bg-inherit">
                  <option className="flex justify-start">Dennis Kim</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-2">Grade (out of 100)</label>
                <input
                  type="text"
                  required
                  className="border py-1 border-gray-400 w-[100px] focus:outline-none focus:border-custom-blue rounded-md bg-inherit"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs  mb-2 font-semibold mt-10">2nd runners up</p>
        <div className="flex flex-row gap-5 ">
          <div className="flex flex-col">
            <label htmlFor="winner" className="text-xs mb-2">
              Select participant
            </label>
            <select className="pr-[150px] py-2 text-xs  border-gray-400 border focus:outline-none focus:border-custom-blue rounded-md bg-inherit">
              <option className="flex justify-start">Dennis Kim</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs mb-2">Grade (out of 100)</label>
            <input
              type="text"
              required
              className="border py-1 border-gray-400 w-[100px] focus:outline-none focus:border-custom-blue rounded-md bg-inherit"
            />
          </div>
        </div>
        <div className="flex justify-end mr-[150px]">
          <button className="bg-custom-blue text-white font-semibold text-xs rounded-md  px-3 py-3 ">
            Submit winners
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgSubmissions;
