import React, { useState, useEffect } from "react";
import logo from "../../assets/unitar-logo.svg";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
const OrgSidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("hackathons");
    } else if (pathnameArray[2] === "submissions") {
      setActivePage("submissions");
    }
  }, [pathnameArray]);
  return (
    <div className=" flex ">
      <div className="bg-light-blue left-side  p-5 h-screen fixed left-0 top-0 ">
        <div className="flex justify-between">
          <img src={logo} alt="logo" width="100" height="54" />
          <img src="/assets/back.svg" alt="back" width="20" height="20" />
        </div>
        <button
          onClick={() => navigate("/organizer/dashboard")}
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
          onClick={() => navigate("/organizer/hackathons")}
          style={{
            backgroundColor:
              activePage === "hackathons" ? "#089BD9" : "inherit",
          }}
          className="py-2 pl-6 pr-8 border rounded-md mt-5 hover:bg-custom-blue"
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
        <button
          onClick={() => navigate("/organizer/submissions")}
          style={{
            backgroundColor:
              activePage === "submissions" ? "#089BD9" : "inherit",
          }}
          className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue"
        >
          <div className="flex gap-5">
            <img src="/assets/projects.svg" alt="icon" width="20" height="20" />
            <span>Submissions</span>
          </div>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default OrgSidebar;
