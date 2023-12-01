import React from "react";

const OrgHackDetailsPart2 = () => {
  return (
    <div className="flex flex-col w-[500px]">
      <h1 className="mt-0 text-gray-600 font-bold  text-[20px]">
        Build4SDGs hackathon
      </h1>
      <p className="text-xs text-gray-600">
        Created by <span className="text-black font-semibold">IBM careers</span>
      </p>
      <div>
        <p className="text-sm  font-semibold mt-5">Highlights</p>
        <p className="text-xs mt-5">
          EcoTrack: A mobile app integrating IoT, gamification, and a carbon
          offset marketplace for effortless carbon footprint monitoring and
          reduction.
        </p>
      </div>
      <div>
        <p className="text-sm  font-semibold mt-5">Description</p>
        <p className="text-xs mt-5">
          EcoTrack is a hackathon project designed to promote environmental
          awareness and sustainable living. The project features a user-friendly
          mobile app that calculates and visualizes individual carbon footprints
          using GPS data and user inputs. Leveraging IoT devices, EcoTrack
          integrates data from smart appliances and vehicles, providing users
          with a comprehensive view of their carbon emissions. Gamification
          elements encourage users to set and achieve sustainability goals,
          while a marketplace facilitates direct contributions to verified
          carbon offset projects.
        </p>
      </div>
      <div>
        <p className="text-sm  font-semibold mt-5">Deliverables</p>
        <p className="text-xs mt-5">
          The project deliverables for EcoTrack encompass the development of a
          user-friendly mobile application for iOS and Android, integrating IoT
          devices to accurately monitor carbon footprints. A robust backend
          infrastructure ensures seamless communication and data management,
          while a secure marketplace enables users to directly contribute to
          verified carbon offset projects. Gamification elements, a community
          hub, and an analytics dashboard incentivize users to adopt sustainable
          practices and monitor their progress.
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold mt-5">Goals</p>
        <p className="text-xs mt-3 ">
          1.Develop a user-friendly mobile app with IoT integration to enable
          seamless carbon footprint tracking and analysis.
        </p>
        <p className="text-xs mt-3 ">
          2. Implement engaging gamification features that motivate users to set
          and achieve sustainability goals within the EcoTrack platform.
        </p>
        <p className="text-xs mt-3 ">
          3. Establish a secure and user-friendly carbon offset marketplace,
          connecting users directly to verified environmental initiatives for
          meaningful contributions to offset their carbon emissions.
        </p>
      </div>
      <div className="flex justify-end">
        {" "}
        <button className="bg-custom-blue w-[150px]  text-white text-xs py-2 px-3 rounded-md mt-5 ">
          Edit Hackathon Details
        </button>{" "}
      </div>
    </div>
  );
};

export default OrgHackDetailsPart2;
