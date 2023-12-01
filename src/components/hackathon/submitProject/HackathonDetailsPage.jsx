import React from "react";
import UserProfile from "../../common/UserProfile";
// import HackDetailsPart1 from "./HackDetailsPart1";
// import HackDetailsPart2 from "./HackDetailsPart2";

const HackathonDetailsPage = () => {
  return (
    <div className="bg-white p-8  min-h-screen right-side">
      <div className="flex justify-between">
        <div></div>
        <h1 className="mt-0 text-gray-600 font-bold  text-[20px] relative mr-[640px]">
          Hackathon
        </h1>
        <UserProfile />
      </div>
      <p className="text-xs text-gray-500  flex flex-row mb-10 ml-60">
        <span>Hackathons</span>
        <img
          src="/assets/chevron-right-solid.svg"
          className="w-2 h-2 mt-[4px] "
          alt="chevron"
        />
        <span>Build4SDGs</span>
      </p>
      <div className="flex gap-[100px] ml-60">
        <div>
          {/* <HackDetailsPart1 /> */}
        </div>
        <div>
          {/* <HackDetailsPart2 /> */}
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailsPage;
