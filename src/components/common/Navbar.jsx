import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  return (
    <nav className=" bg-white w-full flex py-6 justify-between items-center navbar">
      <img src="/assets/logo.jpg" alt="logo" className="ml-[45px] w-[230px]" />{" "}
      <div className=" sm:flex hidden justify-end items-center flex-1 gap-10">
        <button
          onClick={() => navigate("/login")}
          className=" btn-login text-custom-blue   mr-4 w-[70px] px-2 py-2   text-[16px] transition-transform transform hover:-translate-y-1 "
        >
          Login
        </button>
        <button
          onClick={() => openModal()}
          className="inline-flex text-[16px] flex-col items-center justify-center mr-4 gap-10 p-2  text-white flex-shrink-0 rounded-10 bg-custom-blue transition-transform transform hover:-translate-y-1"
        >
          {" "}
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
