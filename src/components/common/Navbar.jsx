import React from "react";
import logo from "../../assets/unitar-logo.svg";
import { useNavigate } from "react-router-dom";
import BasicModal from "./SignUpModal";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="ml-5" />{" "}
      <div className=" sm:flex hidden justify-end items-center flex-1 gap-10">
        <button
          onClick={() => navigate("/login")}
          className=" btn-login  rounded-[8px]  mr-4  p-2 h-50 text-white text-[18px] "
        >
          Login
        </button>
        <BasicModal />
      </div>
    </nav>
  );
};

export default Navbar;
