import React, { useEffect, useState } from "react";
import logo from "../../assets/unitar-logo.svg";
import { Outlet, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");
  const pathnameArray = location.pathname.split("/");
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("hackathons");
    } else if (pathnameArray[2] === "myhackathons") {
      setActivePage("myhackathons");
    }
  }, [pathnameArray]);
  return (
    <div className=" flex ">
      <div className="  bg-light-blue p-4 h-screen fixed left-0 top-0 w-[250px] ">
        <div className="flex justify-between">
          <img src={logo} alt="logo" width="100" height="54" />
          <img src="/assets/back.svg" alt="back" width="20" height="20" />
        </div>
        <button
          onClick={() => navigate("/participant/dashboard")}
          style={{
            backgroundColor: activePage === "dashboard" ? "#089BD9" : "inherit",
          }}
          className="py-2 pl-6 pr-8 border rounded-md hover:bg-custom-blue mt-16  "
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

        <button
          onClick={() => navigate("/participant/hackathons")}
          style={{
            backgroundColor:
              activePage === "hackathons" ? "#089BD9" : "inherit",
          }}
          className="py-2 pl-6 pr-8 border rounded-md hover:bg-custom-blue mt-5  "
        >
          <div className="flex gap-5 ">
            <img
              src="/assets/hackathon.svg"
              alt="icon"
              width="20"
              height="20"
            />
            <span>Hackathons</span>
          </div>
        </button>

        <button
          onClick={() => navigate("/participant/myhackathons")}
          style={{
            backgroundColor:
              activePage === "myhackathons" ? "#089BD9" : "inherit",
          }}
          className="py-2 pl-6 pr-8 border rounded-md hover:bg-custom-blue mt-5  "
        >
          <div className="flex gap-5 ">
            <img
              src="/assets/hackathon.svg"
              alt="icon"
              width="20"
              height="20"
            />
            <span>My Hackathons</span>
          </div>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
