import React from "react";

const HackDetailsPart1 = () => {
  return (
    <div className="flex flex-col">
      <img
        src="/assets/project.jpg "
        className="w-[400px] h-[300px] border rounded-md"
        alt="project"
      />
      <div className="flex flex-row gap-10 mt-[30px]">
        <div className="text-xs">
          <p className="font-semibold">Location</p>
          <p className="mt-2">Nairobi</p>
        </div>
        <div className="text-xs">
          <p className="font-semibold">Timeline</p>
          <p className="mt-2">09-Sept-2023 - 12-Sept-2023</p>
        </div>
        <div className="text-xs">
          <p className="font-semibold">Status</p>
          <p className="text-green-500 mt-2">Active</p>
        </div>
      </div>
      <div className="mt-[40px]">
        <p className="font-semibold text-xs">Tags</p>
        <div className="mt-5 flex gap-5">
          <span className="bg-custom-light-grey rounded-[40px] p-3 text-white text-xs">
            Finance
          </span>
          <span className="bg-custom-light-grey rounded-[40px] p-3  text-white text-xs">
            Education
          </span>
        </div>
        <div className="flex flex-col text-xs mt-5">
          <p className="font-semibold mt-5 mb-2 ">Prize</p>
          <div className="flex flex-row mb-5">
            <p>Winner -</p>
            <p className="font-semibold ">$4,000</p>
          </div>
          <div className="flex flex-row mb-5">
            <p>1st Runners up -</p>
            <p className="font-semibold"> $3,000</p>
          </div>
          <div className="flex flex-row mb-5">
            <p>2nd Runners up -</p>
            <p className="font-semibold">$4,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackDetailsPart1;
