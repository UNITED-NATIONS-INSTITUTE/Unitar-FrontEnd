import React from "react";
import Forge from "./Forge";

const ForParticipants = () => {
  return (
    <>
      <div className="w-full p-2 relative bg-[#E2EDF1] ">
        <p className="text-center text-[1C272E] font-lexend-exa text-[24px] font-extrabold tracking-wider">
          For Participants
        </p>
        <div className="flex items-center m-auto md:grid grid-cols-3">
          <div className="col-span-2">
            <div className="lg:mt-[115px] mt-5 mr-[20px]">
              <h5 className="text-[#12141D] font-lexend-exa text-[28px] font-bold   ">
                Unlock Your Potential
              </h5>
              <p className="mt-5 text-[#12141D] text-[18px] ">
                Dive into a world of endless possibilities. Browse through a
                diverse range of hackathons hosted by top-notch organizations.
                Whether you're a coding prodigy, a design virtuoso, or a
                problem-solving guru, there's a hackathon just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Forge />
    </>
  );
};

export default ForParticipants;
