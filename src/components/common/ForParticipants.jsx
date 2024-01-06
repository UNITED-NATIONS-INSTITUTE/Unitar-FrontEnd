import React, { useEffect, useState } from "react";
import Forge from "./Forge";
import ParticipantChart from "./charts/ParticipantChart";
import Showcase from "./Showcase";

const ForParticipants = () => {
  return (
    <>
      <div className="w-full py-2 relative mt-10 ">
        <div className="bg-custom-blue lg:w-[600px] flex justify-center">
          {" "}
          <p className="text-center text-white  text-[32px] mt-5 font-bold tracking-wider">
            FOR PARTICIPANTS
          </p>
        </div>
        <div className="lg:flex  justify-between mt-6">
          <div className="hidden lg:flex">
            <ParticipantChart />
          </div>

          <div className="lg:mt-[115px] mr-[20px]">
            <h5 className="text-[#2e4161]   lg:text-left text-center font-bold lg:ml-[100px] mt-10 text-lg  ">
              Unlock Your Potential
            </h5>
            <p className="mt-5 text-[#4d4d4d] text-center lg:text-left  text-[18px] lg:ml-[100px] xl:w-[500px]">
              Dive into a world of endless possibilities. Browse through a
              diverse range of hackathons hosted by top-notch organizations.
              Whether you're a coding prodigy, a design virtuoso, or a
              problem-solving guru, there's a hackathon just for you.
            </p>
          </div>
        </div>{" "}
      </div>
      <Forge />
    </>
  );
};

export default ForParticipants;
