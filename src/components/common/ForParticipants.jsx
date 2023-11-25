import React from "react";
import { group } from "../../assets/index";
const ForParticipants = () => {
  return (
    <div
      id="forparticipant"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <p className="text-center text-[1C272E] font-lexend-exa text-[24px] font-extrabold line-h-34 tracking-wider">
          For Participants
        </p>

        <div className="col-span-2">
          <div className="relative ">
            <img src={group} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForParticipants;
