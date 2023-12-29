import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicModal from "./SignUpModal";
import { close, menu } from "../../assets";
import logo from "../../assets/unitar-logo.svg";

const Navbar = ({ openModal }) => {
  const [activePage, setActivePage] = useState("Dashboard");
  const pathnameArray = location.pathname.split("/");

  const navigate = useNavigate();
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("hackathons");
    } else if (pathnameArray[2] === "myhackathons") {
      setActivePage("myhackathons");
    }
  }, [pathnameArray]);
  const [toggle, setToggle] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#E2EDF1");
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#E2EDF1");
      } else {
        setShadow(false);
        setNavBg("transparent");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "w-full fixed z-[1000]  py-6 justify-between items-center flex shadow-xl ease-in-out duration-300"
            : "w-full fixed z-[1000]  py-6 justify-between items-center flex"
        }
      >
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
        } p-12  md:hidden fixed  top-20 right-0 mx-4 my-2 bg-black/70 z-[1000] rounded-xl  w-full h-screen `}
      >
        <div className="ml-10">
          {" "}
          <button
            onClick={() => navigate("/login")}
            className=" rounded-[8px] w-full  mr-4 border bg-custom-blue  p-2 h-50 text-white text-[22px] transition-transform transform hover:-translate-y-1 "
          >
            Login
          </button>
          <button
            onClick={() => openModal()}
            className="inline-flex w-full mt-5 rounded-[8px] flex-col items-center justify-center mr-4 gap-10 text-[22px] p-2 h-50 text-white flex-shrink-0 rounded-10 bg-custom-blue transition-transform transform hover:-translate-y-1"
          >
            Sign up{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
