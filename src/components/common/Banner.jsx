import React from "react";
import {
  aromix,
  fireli,
  martino,
  square,
  vertex,
  waverio,
  virogan,
  natroma,
  shape,
} from "../../assets";
const Banner = () => {
  return (
    <section className=" relative lg:mt-[170px] min-w-full md:h-[472px] bg-[#1c272e] ">
      <p className=" text-center text-white font-lexend-exa text-24 font-semibold leading-34 tracking-wide pt-[100px]  ">
        Brands that are collaborating with us
      </p>
      <div className="flex-wrap w-full gap-11 flex justify-center items-center flex-shrink-0 mt-10 ">
        <img src={waverio} /> <img src={square} />
        <img src={martino} />
        <img src={virogan} />
      </div>

      <div className="flex-wrap w-full pb-10 gap-11 flex justify-center items-center flex-shrink-0 mt-10 ">
        <img src={vertex} />
        <img src={aromix} />
        <img src={fireli} />
        <img src={natroma} />
      </div>

      <div className="lg:block xs:hidden absolute right-0 bottom-[50px]">
        <img src={shape} />
      </div>
    </section>
  );
};

export default Banner;
