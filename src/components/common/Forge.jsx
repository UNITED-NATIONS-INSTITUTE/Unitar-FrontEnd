import React from "react";
import { BG, background } from "../../assets";

const Forge = () => {
  return (
    <div className="w-full p-2 relative ">
      <div className=" flex justify-center items-center ">
        <div>
          <h4 className="text-[#12141D] lg:text-4xl font-lexend-exa lg:font-semibold mr-[500px] lg:mt-[100px] ">
            Forge Connections
          </h4>
          <p className="w-[452px] mt-5">
            Connect with diverse minds from around the globe. Form teams that
            blend expertise, creativity, and drive. Together, you'll redefine
            what's possible.
          </p>
        </div>

        <div>
          {/* <img
            src={background}
            className="absolute top-[100px] left-[812px] border border-blue-500"
          />
          <img src={BG} className=" absolute  top-[136px] left-[852px] " /> */}
        </div>
      </div>
    </div>
  );
};

export default Forge;
