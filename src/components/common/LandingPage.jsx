import React from "react";
import Dashboard from "../participants/Dashboard";
import SignUpPrompt from "./SignUpPrompt";
import Navbar from "./Navbar";
import man2 from "../../assets/man2.png";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div id="main" className="w-full h-screen text-center  ">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
          <div>
            <h1 className=" text-[50px] text-[12141D]">
              Unleashing Innovation, <br /> One Hackathon at a Time!
            </h1>
            <p className="text-center w-[588px] mt-3">
              Join a global community of thinkers, dreamers, and doers. Whether
              you're here to conquer challenges or host groundbreaking
              hackathons, this is where innovation takes center stage.
            </p>
          </div>
        </div>{" "}
        <div className="flex gap-10 items-center justify-center md:w-full mt-[-130px]">
          <button className="bg-[#089BD9] rounded-[10px]  py-4 px-[20px] w-[239px]">
            For Participants
          </button>
          <button className="py-4 px-[20px]  rounded-[10px] border-2 w-[239px] border-[#089BD9] ">
            For Organisers
          </button>
        </div>
        <div className="absolute rounded-full opacity-4 bg-[#00609E] filter bottom-[80px] right-[100px] bottom-10">
          <img src={man2} />
        </div>
      </div>{" "}
    </>
  );
};

export default LandingPage;
