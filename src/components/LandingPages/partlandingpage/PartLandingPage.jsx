import React from "react";
import Navbar from "../Navbar";
import Footer from "../../common/Footer";
import OrgHackathons from "../../organizers/OrgHackathons";

const PartLandingPage = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-white via-blue-100 to-white">
      <Navbar />
      <div className="ml-10 mr-10">
        <h1 className=" text-[12141D] items-center text-center font-Lexend mt-[40px] lg:text-6xl font-bold leading-11 tracking-wider  ">
          <span className="text-custom-blue"> Building Sustainability,</span>
          <br /> <span className="text-gray-700">and Innovation</span>
        </h1>
        <p className="text-center text-gray-600 mt-2">Start Buiding Today!</p>
        <div className="flex flex-row items-center justify-center mt-10 gap-5">
          <form>
            <input
              type="text"
              placeholder="Search hackathon"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-custom-blue"
            />
            <button
              type="submit"
              className="text-white  bg-custom-blue px-4 py-2 rounded-md "
            >
              Search
            </button>
          </form>
        </div>
        <p className="mt-5 font-semibold text-gray-700">Hackathons</p>
        <p className="mt-1 text-gray-600">Submitted projects are listed here</p>
        <div className="bg-white m-5 p-5 rounded">
          <OrgHackathons />
          <OrgHackathons />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartLandingPage;
