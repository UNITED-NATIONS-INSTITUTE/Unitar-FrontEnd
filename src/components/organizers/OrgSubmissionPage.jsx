import React from "react";
import UserProfile from "../common/UserProfile";

import Avatars from "../common/Avatars";

const OrgSubmissionPage = () => {
  const projects = [
    { name: "project #1", url: "image1.svg", description: "" },
    { name: "project #2", url: "image2.png" },
  ];
  return (
    <div className="bg-white p-8 right-side min-h-screen ">
      <div className="ml-60">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px] mb-10 ">
            Submissions
          </h1>
          <UserProfile />
        </div>
        <p className="text-gray-600 text-sm font-semibold">Our Hackathons</p>
        <div className="flex space-x-4 mt-5 ml-4">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col iems-center mb-4">
              <img
                className="rounded-md"
                key={index}
                src={`/assets/${project.url}`}
                alt={`image ${index + 1}`}
                width="250"
                height="200"
              />
              <p className="mt-2 text-sm text-gray-500">{project.name}</p>
              <p className="mt-2 text-sm  font-bold">Build4SDGs</p>
              <p className="mt-2 text-xs text-gray-500 w-[250px]">
                Build4SDGs is a sustainable development startup based in africa
                working torwards SDGs
              </p>
              <div className="flex gap-5">
                <button className="border border-blue-500 rounded-md text-blue-500 w-[150px] text-xs mt-4 py-1">
                  View submissions
                </button>

                <Avatars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgSubmissionPage;
