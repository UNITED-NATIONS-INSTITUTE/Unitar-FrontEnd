import React from "react";
import { Link } from "react-router-dom";

const CreateHackSidebar = () => {
  return (
    <div className=" flex ">
      <div className="bg-light-blue left-side  p-5 h-screen fixed left-0 top-0 ">
        <div className="flex gap-10">
          <img
            src="src/assets/unitar-logo.svg"
            alt="logo"
            width="100"
            height="54"
          />
          <img src="/assets/back.svg" alt="back" width="20" height="20" />
        </div>
        <Link to="/organizer/org-dashboard">
          <button className="py-2 px-6 border rounded-md hover:bg-custom-blue mt-16  ">
            <div className="flex gap-5">
              <img
                src="/assets/dashboard.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span>Dashboard</span>
            </div>
          </button>
        </Link>

        <Link to="/organizer/org-hackathon">
          <button className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue">
            <div className="flex gap-5">
              <img
                src="/assets/hackathon.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span>Hackathon</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateHackSidebar;