import React from "react";
import logo from "../../assets/unitar-logo.svg";

const Sidebar = () => {
  return (
    <div className="bg-blue-100 left-side  p-5 h-screen fixed left-0 top-0 ">
      <div className="flex gap-10">
        <img src={logo} alt="logo" width="100" height="54" />
        <img src="src/assets/back.svg" alt="back" width="20" height="20" />
      </div>
      <button className="py-2 px-6 border bg-custom-blue rounded-md text-white mt-16  ">
        <div className="flex gap-5">
          <img
            src="src/assets/dashboard.svg"
            alt="icon"
            width="20"
            height="20"
          />
          <span>Dashboard</span>
        </div>
      </button>

      <button className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue">
        <div className="flex gap-5">
          <img
            src="src/assets/hackathon.svg"
            alt="icon"
            width="20"
            height="20"
          />
          <span>Hackathon</span>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
