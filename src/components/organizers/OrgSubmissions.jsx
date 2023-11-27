import React from "react";

const OrgSubmissions = () => {
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="ml-60">
        <span>Judge and Publish Winners</span>
        <p>Winner</p>
        <label htmlFor="winner">Select participant</label>
        <div className="flex flex-row gap-5">
          <select className="pr-[150px] py-2 text-xs  border-gray-400 border focus:outline-none focus:border-custom-blue rounded-md bg-inherit">
            <option className="flex justify-start">Dennis Kim</option>
          </select>

          <div>
            <input
              type="text"
              required
              className="border p-2 border-gray-400 w-[100px] focus:outline-none focus:border-custom-blue rounded-md bg-inherit"
            />
          </div>
        </div>
        <p>1st runners up</p>
      </div>
      <p>2nd runners up</p>
    </div>
  );
};

export default OrgSubmissions;
