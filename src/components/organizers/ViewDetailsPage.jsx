import React from "react";

const ViewDetailsPage = ({ openModal }) => {
  return (
    <div>
      <div className="flex gap-[80px] mt-10">
        <img
          src="/assets/image1.svg"
          alt="hackathon"
          className="w-[400px] rounded-[10px] h-[350px]"
        />
        <div>
          <p className="font-semibold ">Project Title</p>
          <h3 className="font-semibold mt-6">Hackathon Platform</h3>
          <p className="mt-6">Project Description</p>
          <p className="mt-6 text-xs w-[400px]">
            EcoTrack is a hackathon project designed to promote environmental
            awareness and sustainable living. The project features a
            user-friendly mobile app that calculates and visualizes individual
            carbon footprints using GPS data and user inputs. Leveraging IoT
            devices, EcoTrack integrates data from smart appliances and
            vehicles, providing users with a comprehensive view of their carbon
            emissions. Gamification elements encourage users to set and achieve
            sustainability goals, while a marketplace facilitates direct
            contributions to verified carbon offset projects.
          </p>{" "}
          <div className="flex flex-row gap-[100px] mt-10">
            <div className="flex flex-col ">
              <p className="text-xs font-bold ">Demo Presentation Link</p>
              <p className="text-xs mt-2 text-[#6E7079]">
                {" "}
                https://www.project.com
              </p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-xs font-bold">Blog Link(optional)</p>
              <p className="text-xs text-[#6E7079]  mt-2">
                {" "}
                https://www.project.com
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[100px] mt-5">
            <div className="flex flex-col ">
              <p className="text-xs font-bold">Live Link</p>
              <p className="text-xs text-[#6E7079]  mt-2 ">
                {" "}
                https://www.project.com
              </p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-xs font-bold">Github Link</p>
              <p className="text-xs text-[#6E7079]  mt-2 ">
                {" "}
                https://www.project.com
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-6 ">
            <p className="text-xs font-bold">Submitted by</p>
            <p className="text-xs text-[#6E7079]  mt-2 "> Denis Kim</p>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-custom-blue rounded-md w-[100px] text-white text-xs px-3 py-2"
              onClick={() => openModal()}
            >
              Grade Hackathon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
