import React, { useState } from "react";
import logo from "../../assets/unitar-logo.svg";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const handleClickPage = (page) => {
    setActivePage(page);
  };
  return (
    <div className=" flex ">
      <div className="  bg-light-blue p-4 h-screen fixed left-0 top-0 w-[250px] ">
        <div className="flex justify-between">
          <img src={logo} alt="logo" width="100" height="54" />
          <img src="/assets/back.svg" alt="back" width="20" height="20" />
        </div>
        <Link to="/participant/dashboard">
          <button
            onClick={() => handleClickPage("Dashboard")}
            style={{
              backgroundColor:
                activePage === "Dashboard" ? "#089BD9" : "inherit",
            }}
            className="py-2 px-6 border rounded-md hover:bg-custom-blue mt-16  "
          >
            <div className="flex gap-5 ">
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
        <Link to="/participant/hackathons">
          <button
            onClick={() => handleClickPage("Hackathon")}
            style={{
              backgroundColor:
                activePage === "Hackathon" ? "#089BD9" : "inherit",
            }}
            className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue"
          >
            <div className="flex gap-5">
              <img
                src="/assets/hackathon.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span>Hackathons</span>
            </div>
          </button>
        </Link>
        <Link to="/participant/myhackathons">
          <button
            onClick={() => handleClickPage("My Hackathons")}
            style={{
              backgroundColor:
                activePage === "My Hackathons" ? "#089BD9" : "inherit",
            }}
            className="py-2  px-6 border rounded-md mt-5 hover:bg-custom-blue w-[200px] "
          >
            <div className="flex gap-5 w-[200px]">
              <img
                src="/assets/hackathon.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span className="">My Hackathons</span>
            </div>
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
