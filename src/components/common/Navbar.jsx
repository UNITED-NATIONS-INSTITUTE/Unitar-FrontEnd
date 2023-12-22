import React, { useState } from "react";
import logo from "../../assets/unitar-logo.svg";
import { useNavigate } from "react-router-dom";
import BasicModal from "./SignUpModal";
import { close, menu } from "../../assets";
import { FiMenu } from "react-icons/fi";
const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="w-full flex py-6 justify-between items-center navbar">
        <img
          src={logo}
          alt="logo"
          className="ml-5 w-[100px] md:w-[120px] lg:w-[140px] "
        />{" "}
        <div className=" md:flex hidden justify-end items-center flex-1 gap-10">
          <button
            onClick={() => navigate("/login")}
            className=" btn-login  rounded-[8px]  mr-4  p-2 h-50 text-white text-[18px] transition-transform transform hover:-translate-y-1 "
          >
            Login
          </button>
          <button
            onClick={() => openModal()}
            className="inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0 rounded-10 bg-custom-blue transition-transform transform hover:-translate-y-1"
          >
            {" "}
            Sign up
          </button>
        </div>
        <div className="md:hidden flex justify-end text-custom-blue w-[100px]">
          {/* <FiMenu /> */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain text-custom-blue "
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-12  md:hidden fixed  top-20 right-0 mx-4 my-2  min-w-[140px] rounded-xl  w-full h-screen `}
      >
        <div className="z-20">
          {" "}
          <button
            onClick={() => navigate("/login")}
            className=" rounded-[8px]  mr-4 border border-custom-blue  p-2 h-50 text-custom-blue text-[18px] transition-transform transform hover:-translate-y-1 "
          >
            Login
          </button>
          <button
            onClick={() => openModal()}
            className="inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0 rounded-10 bg-custom-blue transition-transform transform hover:-translate-y-1"
          >
            {" "}
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
