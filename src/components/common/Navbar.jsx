import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between  py-2 md:px-10 px-7 ">
        <div
          className="  cursor-pointer flex items-center  
      "
        >
          <img src={logo} alt="logo" />
        </div>

        <div className="flex justify-between items-center gap-[50px] ">
          <Link to="/login">
            <button className=" rounded-[8px] flex-col items-center justify-center gap-10 p-2 w-83 h-50 flex-shrink-0  border-2 border-custom-blue">
              LogIn
            </button>
          </Link>
          <Link to="/signup">
            <button className="inline-flex rounded-[8px] flex-col items-center justify-center mr-4 gap-10 p-2 h-50 text-white flex-shrink-0  bg-custom-blue">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
