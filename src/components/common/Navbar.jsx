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
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />{" "}
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
  //   <div className="w-full top-0 left-0">
  //     <div className=" md:flex items-center justify-between py-2 md:px-10 px-7">
  //       <div className="cursor-pointer flex items-center">
  //         <img src={logo} alt="logo" />
  //       </div>

  //       <div className="flex justify-between items-center gap-[100px] ">
  //         <Link to="/login">
  //           <button className=" btn-login inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0 rounded-10 text-[18px] ">
  //             Login
  //           </button>
  //         </Link>
  //         <Modal />
  //         {/* <Link to="/prompt">
  //           <button className="inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0 rounded-10 bg-custom-blue">
  //             Sign Up
  //           </button>
  //         </Link> */}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Navbar;
