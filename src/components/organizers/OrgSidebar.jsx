import React, { useState } from "react";
import logo from "../../assets/unitar-logo.svg";
import { Link, Outlet } from "react-router-dom";
const OrgSidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const handleClickPage = (page) => {
    setActivePage(page);
  };
  return (
    <div className=" flex ">
      <div className="bg-light-blue left-side  p-5 h-screen fixed left-0 top-0 ">
        <div className="flex gap-10">
          <img src={logo} alt="logo" width="100" height="54" />
          <img src="/assets/back.svg" alt="back" width="20" height="20" />
        </div>
        <Link to="/organizer/org-dashboard">
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

        <Link to="/organizer/org-hackathon">
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
              <span>Hackathon</span>
            </div>
          </button>
        </Link>
        <Link to="/organizer/org-submissions">
          <button
            onClick={() => handleClickPage("Submission")}
            style={{
              backgroundColor:
                activePage === "Submission" ? "#089BD9" : "inherit",
            }}
            className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue"
          >
            <div className="flex gap-5">
              <img
                src="/assets/projects.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span>Submissions</span>
            </div>
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default OrgSidebar;
