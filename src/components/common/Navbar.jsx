import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-2 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex justify-between items-center gap-5">
          <Link to="/login">
            <button className="rounded-md px-4 py-2 border-2 border-custom-blue">
              LogIn
            </button>
          </Link>
          <Link to="/signup">
            {/* TO DO: question if user wanna sign in as org or part, BY RAISING MODAL */}
            <button className="rounded-md px-4 py-2 text-white bg-custom-blue">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
