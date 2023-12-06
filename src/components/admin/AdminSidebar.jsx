import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
import { align, gift, layers, line1, users } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "participants") {
      setActivePage("participants");
    } else if (pathnameArray[2] === "all organizers") {
      setActivePage("all organizers");
    } else if (pathnameArray[2] === "all hackathons") {
      setActivePage("all hackathons");
    } else if (pathnameArray[2] === "all submissions") {
      setActivePage("all submissions");
    } else if (pathnameArray[2] === "users") {
      setActivePage("users");
    }
  }, [pathnameArray]);
  return (
    <div className="flex">
      <div className=" bg-light-blue  p-4 h-screen fixed left-0 top-0 w-[250px] ">
        <>
          <div className="flex justify-between items-center">
            <img src={logo} />
          </div>
          <img src={line1} className="mt-3" />
          <button
            onClick={() => navigate("/admin/dashboard")}
            style={{
              borderColor: activePage === "dashboard" ? "#089BD9" : "inherit",
            }}
            className="  border rounded-md w-[200px] py-2 mt-5 "
          >
            <div className="flex gap-4">
              <img src={align} className="ml-7" />
              <p className=" text-[14px] ">Dashboard</p>
            </div>
          </button>

          <button
            onClick={() => navigate("/admin/participants")}
            style={{
              borderColor:
                activePage === "participants" ? "#089BD9" : "inherit",
            }}
            className="  border rounded-md w-[200px] py-2 mt-5 "
          >
            <div className="flex gap-4">
              <img src={users} className="ml-7" />
              <p className=" text-[14px] ">All particpiants</p>
            </div>
          </button>
          <button
            style={{
              borderColor:
                activePage === "all organizers" ? "#089BD9" : "inherit",
            }}
            className="  border rounded-md w-[200px] py-2 mt-5 "
          >
            <div className="flex gap-4">
              <img src={users} className="ml-7" />
              <p className=" text-[14px] ">All Organizers</p>
            </div>
          </button>
          <button
            style={{
              borderColor:
                activePage === "all hackathons" ? "#089BD9" : "inherit",
            }}
            className="  border rounded-md w-[200px] py-2 mt-5 "
          >
            <div className="flex gap-4">
              <img src={layers} className="ml-7" />
              <p className=" text-[14px] ">All Hackathons</p>
            </div>
          </button>
          <button
            style={{
              borderColor:
                activePage === "all submissions" ? "#089BD9" : "inherit",
            }}
            className="  border rounded-md w-[200px] py-2 mt-5 "
          >
            <div className="flex gap-4">
              <img src="/assets/submissions.svg" className="ml-7" />
              <p className=" text-[14px] ">All Submissions</p>
            </div>
          </button>
          <button
            style={{
              borderColor: activePage === "users" ? "#089BD9" : "inherit",
            }}
            className="  border rounded-md w-[200px] py-2 mt-5 "
          >
            <div className="flex gap-4">
              <img src="/assets/users.svg" className="ml-7 w-7 h-7" />
              <p className=" text-[14px]  ">Users</p>
            </div>
          </button>
        </>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminSidebar;
