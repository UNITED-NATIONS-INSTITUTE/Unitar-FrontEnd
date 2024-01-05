import React from "react";
import { woman, karen, project, man } from "../../assets";
import FeatureBanner from "./FeatureBanner";
import BannerItem from "./BannerItem";
import OrganizerChart from "./charts/OrganizerChart";
const Showcase = () => {
  return (
    <>
      <div className=" bg-[white]">
        <div className=" lg:flex items-center gap-10  lg:ml-[98px] rounded-3xl lg:mr-[98px]">
          <img
            src={woman}
            className="lg:w-[600px] w-full mt-11 lg:ml-11 rounded-lg mb-10"
          />
          <div>
            <h4 className="text-[#2e4161] text-center lg:text-left lg:text-4xl font-lexend-exa   font-semibold ">
              Showcase Your <br /> Skills
            </h4>
            <p className="text-[#4d4d4d] mr-1 text-[18px] mt-3 lg:text-left lg:w-[440px] text-center">
              Make your mark in the tech and innovation landscape. Showcase your
              talents through innovative solutions, and grab the attention of
              potential employers and collaborators.
            </p>
          </div>
        </div>
        <div className="w-full py-2 relative bg-[#F9FAFE]">
          <div className="bg-custom-blue w-[600px] flex justify-center">
            {" "}
            <p className="  text-white    text-[32px] mt-5 font-bold tracking-wider">
              FOR ORGANIZERS
            </p>
          </div>

          <div className="lg:flex flex justify-between">
            <div></div>
            <OrganizerChart />
            <div className="lg:mt-[115px] mr-[20px]">
              <h5 className="text-[#2e4161]  lg:text-[28px] lg:text-left text-[20px] text-center font-bold lg:ml-[100px] mt-10  ">
                Tap into Talent
              </h5>
              <p className="mt-5 text-[#4d4d4d] text-center lg:text-left  text-[18px] lg:ml-[100px] w-[600px]">
                Discover the next generation of innovators. Post your hackathon
                on UNITAR and connect with a global pool of talent. Watch as
                diverse teams bring fresh perspectives to your challenges.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[#c6e2f4]  w-full min-h-screen p-2 ">
          <div className=" lg:flex justify-center items-center ">
            <div className="lg:w-[494px] ">
              <h4 className="text-[#2e4161] text-center lg:text-left lg:text-4xl font-lexend-exa  font-semibold ">
                Drive Innovation
              </h4>
              <p className="text-[#4d4d4d] text-[18px] mt-3 lg:text-left text-center">
                Challenge participants with real-world problems and witness
                groundbreaking solutions. Fuel innovation within your
                organization and be at the forefront of industry advancements.
              </p>
            </div>
            <div>
              {" "}
              <img
                src={project}
                className=" w-full lg:w-[600px] mt-11 lg:ml-6"
              />{" "}
            </div>
          </div>
        </div>

        <div className=" lg:flex items-center gap-10 lg:ml-[98px] rounded-3xl lg:mr-[98px]">
          <img src={man} className="w-[600px] lg:mt-11 lg:ml-11 rounded-lg" />
          <div>
            <h4 className="text-[#2e4161] text-center lg:text-left lg:text-4xl font-lexend-exa mb-11  font-semibold ">
              Boost Your Brand
            </h4>
            <p className="text-[#4d4d4d] text-[18px] mt-3 lg:text-left lg:w-[440px] text-center">
              Associate your organization with innovation. Be a catalyst for
              change and join a community that values pushing the boundaries of
              what's possible.
            </p>
          </div>
        </div>
      </div>{" "}
      <BannerItem />
    </>
  );
};

export default Showcase;
