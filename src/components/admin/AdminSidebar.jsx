import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
import {
  align,
  gift,
  layers,
  line1,
  users,
  clip,
  grid,
  thumbs,
  help,
  circle,
} from "../../assets";

const AdminSidebar = () => {
  return (
    <>
      <div className=" bg-white  p-4  min-h-screen left-0 top-0 w-[1/4] ">
        <>
          <div className="flex justify-between items-center">
            <img src={logo} />
          </div>
          <img src={line1} className="mt-3" />
          <div className="mt-6 flex items-center ml-6">
            <img src={align} />
            <p className="ml-4 text-gray-400 text-[14px] ">Dashboard</p>{" "}
          </div>
          <div className="mt-6 flex items-center ml-6">
            <img src={layers} />
            <p className="ml-4 text-gray-400 text-[14px]">Hachathons</p>{" "}
          </div>
          <div className="mt-6 flex items-center ml-6">
            <img src={users} />
            <p className="ml-4 text-gray-400 text-[14px]">Users</p>{" "}
          </div>
          <div className="mt-6 flex items-center ml-6">
            <img src={gift} />
            <p className="ml-4 text-gray-400 text-[14px]">Settings</p>{" "}
          </div>
        </>
      </div>
    </>
  );
};

export default AdminSidebar;
