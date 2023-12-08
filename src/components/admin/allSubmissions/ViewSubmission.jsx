import React, { useState, useEffect } from "react";

const ViewSubmissions = () => {
  return (
    <div className="bg-white right-side min-h-screen min-w-full">
      <div className="ml-[280px]">
        <div className="flex justify-between mt-8">
          <h1 className="text-gray-600 font-bold text-[24px]">
            Submitted Hackathons
          </h1>
          <div className="mr-10">{/* <UserProfile /> */}</div>
        </div>
        <div className="flex flex-wrap space-x-4 mt-5 ml-4">
          <div className="flex rounded-[6px] shadow-xl flex-col border border-gray-100  mb-4 w-[300px] h-[400px] transition-transform transform hover:-translate-y-1">
            <img
              className="rounded-md w-[300px] h-[200px]"
              src="/assets/image2.png"
              alt="image"
            />
            <p className="mt-2 text-sm ml-4 text-gray-500">EdTechInnovation </p>
            <p className="mt-2 text-sm ml-4 font-bold">
              Redefining synchronous learning experiences.
            </p>
            <p className="mt-2 text-[12px] ml-4 w-[200px]  text-gray-500">
              A revolutionary platform designed to empower educators with
              cutting-edge tools for immersive and engaging virtual classrooms.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSubmissions;
