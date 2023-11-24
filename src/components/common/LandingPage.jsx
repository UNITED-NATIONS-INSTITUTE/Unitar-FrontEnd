import React from "react";
import Dashboard from "../participants/ParticipantDashboard";
import SignUpPrompt from "./SignUpPrompt";
import Navbar from "./Navbar";
import { LineChart } from "@mui/x-charts/LineChart";
import man2 from "../../assets/man2.png";
import man1 from "../../assets/man1.png";
import frame from "../../assets/frame.png";

const LandingPage = () => {
  const months = ["Jan", "Feb", "March", "Apr", "May", "June"];
  const data = [100, 200, 300, 400, 500, 600];
  return (
    <>
      <Navbar />
      <div id="main" className="w-full h-screen text-center  ">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center">
          <div className="mt-[150px]">
            <h1 className=" text-[12141D] items-center text-center font-Lexend-Exa text-6xl font-extrabold leading-11 tracking-wider  ">
              Unleashing Innovation, <br /> One Hackathon at a Time!
            </h1>
            <p className="text-center w-[588px] mt-3 ml-20 font-normal">
              Join a global community of thinkers, dreamers, and doers. Whether
              you're here to conquer challenges or host groundbreaking
              hackathons, this is where innovation takes center stage.
            </p>
          </div>
        </div>{" "}
        <div className="flex gap-10 items-center justify-center md:w-full mt-[-180px]">
          <button className="bg-[#089BD9] rounded-[10px]  py-4 px-[20px] w-[239px]">
            For Participants
          </button>
          <button className="py-4 px-[20px]  rounded-[10px] border-2 w-[239px] border-[#089BD9] ">
            For Organisers
          </button>
        </div>
        <div className="absolute rounded-full  filter bottom-[200px]  right-[200px] ">
          <img
            src={man2}
            className="rounded-full bg-[#00609E] opacity-4 w-[80px]"
          />
        </div>
        <div className="absolute w-269 h-269 flex-shrink-0 rounded-full opacity-4 bg-blue-500 filter left-[150px]">
          <img src={man1} />
        </div>
        <div className="absolute left-[400px] mt-[90px] flex flex-col justify-center items-center gap-4 p-4 w-[163px] transform -rotate-5 border-2 border-solid border-transparent rounded-10  ">
          <img src={frame} />
        </div>
        {/* <div>
          <LineChart
            xAxis={[{ data: months }]}
            series={[
              {
                data: data,
              },
            ]}
            width={500}
            height={300}
          />
        </div> */}
      </div>{" "}
    </>
  );
};

export default LandingPage;
