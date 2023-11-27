import React from "react";
import Navbar from "../Navbar";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import OrgHackathons from "../../organizers/OrgHackathons";

const OrgLandingPage = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-white via-blue-100 to-white">
      <Navbar />
      <div className="ml-10 mr-10">
        <h1 className=" text-[12141D] items-center text-center font-Lexend mt-[40px] lg:text-6xl font-bold leading-11 tracking-wider  ">
          <span className="text-custom-blue"> Accelarate Innovation</span>
          <br /> <span className="text-gray-700">in Africa</span>
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Join us, Organize a Hackathon Today!
        </p>

        <div className="flex justify-center mt-5">
          <button className="text-white  bg-custom-blue px-4 py-2 rounded-md ">
            Request a Demo
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <img
            className="w-[800px] h-[500px]"
            src="/assets/safari.jpg"
            alt="screen"
          />
        </div>
        <p className="mt-5 font-semibold text-gray-700">Organizations</p>
        <p className="mt-1 text-gray-600">All organizations are listed here</p>
        <div className="bg-white m-5 p-5 rounded">
          <OrgHackathons />
          <OrgHackathons />
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default OrgLandingPage;
