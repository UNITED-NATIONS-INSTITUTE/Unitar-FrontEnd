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
      <div className=" left-side bg-light-blue p-4 h-screen fixed left-0 top-0 w-[300px] ">
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
        <Link to="/admin/Hackathons">
          <button
            onClick={() => handleClickPage("Hackathons")}
            style={{
              backgroundColor:
                activePage === "Hackathons" ? "#089BD9" : "inherit",
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
        <Link to="/admin/Organizers">
          <button
            onClick={() => handleClickPage("Organizers")}
            style={{
              backgroundColor:
                activePage === "Organizers" ? "#089BD9" : "inherit",
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
              <span>Organizers</span>
            </div>
          </button>
        </Link>

        <Link to="/admin/Participants">
          <button
            onClick={() => handleClickPage("Organizers")}
            style={{
              backgroundColor:
                activePage === "Organizers" ? "#089BD9" : "inherit",
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
              <span>Participants</span>
            </div>
          </button>
        </Link>
        
        <Link to="/admin/Organizers">
          <button
            onClick={() => handleClickPage("Organizers")}
            style={{
              backgroundColor:
                activePage === "Organizers" ? "#089BD9" : "inherit",
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
              <span> Entries</span>
            </div>
          </button>
        </Link>

        <Link>
          <button
            onClick={() => handleClickPage("Submission")}
            style={{
              backgroundColor:
                activePage === "Submission" ? "#089BD9" : "inherit",
            }}
            className="py-2  px-6 border rounded-md mt-5 hover:bg-custom-blue "
          ></button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
