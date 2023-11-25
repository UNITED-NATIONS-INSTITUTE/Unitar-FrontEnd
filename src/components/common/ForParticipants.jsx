import React from "react";
import {
  group,
  percentage,
  design,
  group6,
  cre,
  ellipse7,
  group7,
  cre1,
  ellipse5,
  group8,
  cre2,
  aug,
  july,
  june,
  unlock,
  ellipse6,
} from "../../assets/index";
const ForParticipants = () => {
  return (
    <div className="w-full  p-2 relative  bg-[#E2EDF1] ">
      {" "}
      <p className="text-center text-[1C272E] font-lexend-exa text-[24px] font-extrabold tracking-wider">
        For Participants
      </p>
      <div className="flex items-center  m-auto md:grid grid-cols-3">
        <div className="col-span-2">
          <div className="absolute hidden lg:block  lg:top-[215px] lg:left-[357px] left-[70px]   ">
            <img src={group} />{" "}
          </div>
          <img
            src={percentage}
            className="absolute hidden lg:block lg:top-[288px] lg:left-[421px] left-[150px] top-[140px]"
          />
          <img
            src={ellipse6}
            className="lg:block hidden  absolute top-[244px] left-[600px] "
          />
          <img
            src={design}
            className="absolute lg:block xs:hidden top-[337px] left-[395px] "
          />
          <div className=" lg:block xs:hidden bg-white w-[179.272px] h-[70.533px] pt-[14.695px] pr-[14.694px] pb-[14.408px] pl-[14.695px] rounded-[10px] absolute top-[144.08px] left-[552.21px]"></div>{" "}
          <img
            src={group6}
            className="lg:block xs:hidden absolute top-[149.08px] left-[559.21px]"
          />
          <img
            src={cre}
            className="lg:block xs:hidden absolute top-[158.78px]  left-[596.29px]"
          />
          <img
            src={ellipse7}
            className="lg:block xs:hidden absolute top-[160px] left-[213px] "
          />
          <div className="lg:block xs:hidden bg-white w-[179.272px] h-[70.533px] pt-[14.695px] pr-[14.694px] pb-[14.408px] pl-[14.695px] rounded-[10px] absolute top-[364.5px] left-[152.52px]"></div>{" "}
          <img
            src={group7}
            className="lg:block xs:hidden  absolute top-[381.4px] left-[167.21px] "
          />
          <img
            src={cre1}
            className="lg:block xs:hidden absolute top-[378.2px] left-[196.6px] "
          />
          <img
            src={aug}
            className="lg:block xs:hidden  absolute top-[191.11px] left-[596.29px] "
          />
          <img
            src={ellipse5}
            className="lg:block xs:hidden absolute top-[487px] left-[322px] "
          />
          <div className="lg:block xs:hidden bg-white w-[179.272px] h-[70.533px] pt-[14.695px] pr-[14.694px] pb-[14.408px] pl-[14.695px] rounded-[10px] absolute top-[473.97px] left-[503.72px]"></div>{" "}
          <img
            src={group8}
            className="lg:block xs:hidden absolute top-[490.87px] left-[517.68px]"
          />
          <img
            src={cre2}
            className="lg:block xs:hidden absolute top-[488.67px] left-[547.06px]"
          />
          <img
            src={july}
            className="lg:block xs:hidden  absolute top-[411.52px] left-[196.6px]"
          />
          <img
            src={june}
            className="lg:block xs:hidden  absolute top-[520px] left-[547.06px]"
          />
        </div>

        <div className="lg:mt-[115px]  mt-5 mr-[20px]">
          <h5 className=" text-[#12141D] font-lexend-exa text-[28px] font-bold   ">
            Unlock Your Potential
          </h5>
          <p className="mt-5 text-[#12141D] text-[18px] ">
            Dive into a world of endless possibilities. Browse through a diverse
            range of hackathons hosted by top-notch organizations. Whether
            you're a coding prodigy, a design virtuoso, or a problem-solving
            guru, there's a hackathon just for you.
          </p>

          {/* <img src={unlock} /> */}
        </div>
      </div>
    </div>
  );
};

export default ForParticipants;
