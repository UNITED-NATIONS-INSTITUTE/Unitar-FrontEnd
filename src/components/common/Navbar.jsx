import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
import Modal from "./SignUpModal";
const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-2 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex justify-between items-center gap-[100px] ">
          <Link to="/login">
            <button className=" btn-login inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0 rounded-10 text-[18px] ">
              Login
            </button>
          </Link>
          <Modal />
          {/* <Link to="/prompt">
            <button className="inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0 rounded-10 bg-custom-blue">
              Sign Up
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
