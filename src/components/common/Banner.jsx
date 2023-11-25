import React from "react";
import { collaborators } from "./constants";
const Banner = () => {
  return (
    <section className=" my-4 w-full h-[472px] bg-[#1c272e] ">
      <p className=" text-center text-white font-lexend-exa text-24 font-semibold leading-34 tracking-wide pt-[100px]  ">
        Brands we are collaborating with us
      </p>
      <div className="flex-wrap w-full flex justify-center items-center flex-shrink-0 ">
        {collaborators.map((collaborator) => (
          <div
            key={collaborator.id}
            className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5"
          >
            <img
              src={collaborator.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
