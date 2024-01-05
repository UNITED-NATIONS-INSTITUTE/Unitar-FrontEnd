import React, { useEffect, useState } from "react";
import Forge from "./Forge";
import ParticipantChart from "./charts/ParticipantChart";

const ForParticipants = () => {
  return (
    <>
      <div className="w-full py-2 relative mt-10">
        <div className="bg-custom-blue w-[600px] flex justify-center">
          {" "}
          <p className="text-center text-white  text-[32px] mt-5 font-bold tracking-wider">
            FOR PARTICIPANTS
          </p>
        </div>
        <div className="lg:flex flex justify-between">
          <div>
            <ParticipantChart />
          </div>

          <div className="lg:mt-[115px] mr-[20px]">
            <h5 className="text-[#2e4161]  lg:text-[28px] lg:text-left text-[20px] text-center font-bold lg:ml-[100px] mt-10  ">
              Unlock Your Potential
            </h5>
            <p className="mt-5 text-[#4d4d4d] text-center lg:text-left  text-[18px] lg:ml-[100px] w-[600px]">
              Dive into a world of endless possibilities. Browse through a
              diverse range of hackathons hosted by top-notch organizations.
              Whether you're a coding prodigy, a design virtuoso, or a
              problem-solving guru, there's a hackathon just for you.
            </p>
          </div>
        </div>{" "}
        <Forge />
      </div>
      <Forge />
      <Showcase />
    </>
  );
};

export default ForParticipants;
