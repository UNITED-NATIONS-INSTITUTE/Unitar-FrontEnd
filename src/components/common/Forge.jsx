import React from "react";
import { project } from "../../assets";

const Forge = () => {
  return (
    <div className="mt-[30px] bg-[#c6e2f4]  w-full min-h-screen p-2 ">
      <div className=" lg:flex justify-center items-center ">
        <div className="lg:w-[494px] ">
          <h4 className="text-[#2e4161] text-center lg:text-left lg:text-4xl font-lexend-exa  font-semibold ">
            Forge Connections
          </h4>
          <p className="text-[#4d4d4d] text-[18px] mt-3 lg:text-left text-center">
            Connect with diverse minds from around the globe. Form teams that
            blend expertise, creativity, and drive. Together, you'll redefine
            what's possible.
          </p>
        </div>
        <div>
          <img src={project} className=" w-full lg:w-[600px] mt-11 lg:ml-6" />
        </div>
      </div>
      <Showcase />
    </div>
  );
};

export default Forge;
