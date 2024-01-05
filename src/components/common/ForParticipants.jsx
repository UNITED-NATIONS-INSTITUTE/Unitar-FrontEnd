import React from "react";
import Forge from "./Forge";
import { karen } from "../../assets/index";

const ForParticipants = () => {
  return (
    <>
      <div className="w-full p-2 relative bg-[#E2EDF1] ">
        <p className="text-center text-[1C272E] font-lexend-exa text-[24px] mt-[50px] lg:mt-[20px] font-bold tracking-wider">
          For Participants
        </p>
        <div className="lg:flex items-center justify-center lg:mt-11 ">
          <img src="/assets/people.jpg" className="w-[700px] h-[700px]" />
          <div className="lg:mt-[115px] lg:mr-[20px]">
            <h5 className="text-[#12141D] font-lexend-exa  mb-5 lg:text-[28px] lg:text-left text-[24px] text-center font-bold lg:ml-[100px]   ">
              Unlock Your Potential
            </h5>
            <p className=" text-[#12141D] text-center lg:text-left  text-[18px] md:text-xl  lg:ml-[100px] ">
              Dive into a world of endless possibilities. Browse through a
              diverse range of hackathons hosted by top-notch organizations.
              Whether you're a coding prodigy, a design virtuoso, or a
              problem-solving guru, there's a hackathon just for you.
            </p>
          </div>
        </div>{" "}
        <Forge />
      </div>
    </>
  );
};

export default ForParticipants;
