import React from "react";
import Hackathons from "./Hackathons";
import Avatars from "./Avatars";

const Content = () => {
  return (
    <div className="overflow-y-auto  ml-60">
      <h1 className="text-gray-600 font-bold">Dashboard</h1>
      <div className="flex mt-12">
        <div className="border bg-custom-blue rounded-md text-white pr-20 pt-5 mr-5">
          <span className="text-xs p-5">Total participants</span>
          <p className="p-5">524</p>
        </div>
        <div className="border bg-gray-200 rounded-md  pr-20  pt-5 mr-5">
          <span className="text-xs p-5">Total projects</span>
          <p className="p-5">50</p>
        </div>
        <div className="border bg-gray-200 rounded-md  pr-20  pt-5 mr-5">
          <span className="text-xs p-5">Total organizers</span>
          <p className="p-5">50</p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-gray-600 font-semibold">Ongoing hackathons</h1>
        <h3 className="mt-3 text-sm font-bold">Hackathons</h3>
        <p className="text-gray-500 text-xs mt-2">
          Submitted projects are listed here
        </p>
        <Hackathons />
      </div>
    </div>
  );
};

export default Content;
