// AdminDashboard.js
import React, { useState } from "react";
import logo from "../../assets/unitar-logo.svg";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const handleClickPage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex">
      <div className="left-side bg-light-blue p-4 h-screen fixed left-0 top-0 w-[300px]">
        <div className="flex justify-between">
          <img src={logo} alt="logo" width="100" height="54" />
          {/* Add a link or button for admin logout or settings if needed */}
          <Link to="/admin/settings">
            <img src="/assets/settings.svg" alt="settings" width="20" height="20" />
          </Link>
        </div>
        <Link to="/admin/dashboard">
          <button
            onClick={() => handleClickPage("Dashboard")}
            style={{
              backgroundColor:
                activePage === "Dashboard" ? "#089BD9" : "inherit",
            }}
            className="py-2 px-6 border rounded-md hover:bg-custom-blue mt-16"
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
        <Link to="/admin/users">
          <button
            onClick={() => handleClickPage("Users")}
            style={{
              backgroundColor:
                activePage === "Users" ? "#089BD9" : "inherit",
            }}
            className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue"
          >
            <div className="flex gap-5">
              <img
                src="/assets/users.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span>Users</span>
            </div>
          </button>
        </Link>
        <Link to="/admin/reports">
          <button
            onClick={() => handleClickPage("Reports")}
            style={{
              backgroundColor:
                activePage === "Reports" ? "#089BD9" : "inherit",
            }}
            className="py-2 px-6 border rounded-md mt-5 hover:bg-custom-blue"
          >
            <div className="flex gap-5">
              <img
                src="/assets/reports.svg"
                alt="icon"
                width="20"
                height="20"
              />
              <span>Reports</span>
            </div>
          </button>
        </Link>
        {/* Add more buttons for other admin features as needed */}
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
