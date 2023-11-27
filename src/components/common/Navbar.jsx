import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
import Modal from "./SignUpModal";
import { menu, close } from "../../assets/index";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="ml-5" />{" "}
      <div className=" sm:flex hidden justify-end items-center flex-1 gap-10">
        <Link to="/login">
          <button className=" btn-login  rounded-[8px]  mr-4  p-2 h-50 text-white text-[18px] ">
            Login
          </button>
        </Link>
        <Modal />
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain ml-4"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute w-full top-20 right-0 mx-4 my-2 rounded-xl sidebar`}
        >
          <Link to="/login">
            <button className=" rounded-[8px]  mr-4  p-2 h-50 text-white text-[18px] ">
              Login
            </button>
          </Link>
          <Modal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
