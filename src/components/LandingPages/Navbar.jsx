import React from "react";
import logo from "../../assets/unitar-logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-2">
      <img src={logo} className="ml-11" />
      <ul className="flex items-center  gap-6">
        <li>Hackathons</li>
        <li>Features </li>
        <li>Blog</li>
        <li>Support</li>
      </ul>
      <div className="gap-4 flex mr-11">
        <button>Sign in</button>
        <button className="py-2 px-4 text-[16px]  text-[#2752E7] rounded-md border border-blue-500">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
