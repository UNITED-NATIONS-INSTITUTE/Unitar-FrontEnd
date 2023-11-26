import React from "react";
import { BG, rect1, background, group9 } from "../../assets";

const Forge = () => {
  return (
    <div className="lg:mt-[300px] mt-10 bg-white relative w-full min-h-screen ">
      <div className=" flex justify-center items-center ">
        <h4 className="text-[#12141D] lg:text-4xl font-lexend-exa lg:mr-[500px] lg:font-semibold gap-10 lg:mt-[100px] ">
          Forge Connections
        </h4>
        <img
          src={background}
          className="absolute top-[100px] right-[70px] border rounded-[10px] shadow-2xl"
        />{" "}
        <p className="text-black text-[21px] font-semi-bold absolute top-[136px] left-[571px]  ">
          Project Planning
        </p>
        <img
          src={rect1}
          className=" absolute  top-[191.74px]  right-[102.87px]  "
        />
        <img src={group9} className=" absolute top-[205px] left-[602.13px] " />
      </div>
    </div>
  );
};

export default Forge;
