import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicModal from "./SignUpModal";
import { close, menu } from "../../assets";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import logo from "../../assets/unitar-logo.svg";

const Navbar = ({ openModal }) => {
  const [activePage, setActivePage] = useState("Dashboard");
  const pathnameArray = location.pathname.split("/");
  const [nav, setNav] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#E2EDF1");

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

  const handleNav = () => {
    setNav(!nav);
  };

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
        <div className="md:hidden" onClick={handleNav}>
          <img src={menu} />
        </div>
      </div>
      <div
        className={
          nav
            ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[1000]"
            : " "
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[75%] md:w-[45%] h-screen z-[1000] bg-[#E2EDF1] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-400 "
          }
        >
          <div className="flex w-full items-center  gap-7 justify-between">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] md:w-[120px] lg:w-[140px]  "
            />
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <img src={close} onClick={handleNav} />
            </div>{" "}
          </div>

          <ul className="uppercase mt-8">
            <button
              onClick={() => navigate("/login")}
              className=" py-4 text-md uppercase  text-[#12141D]"
            >
              Login
            </button>

            <li>
              <button
                onClick={() => openModal()}
                className="py-4 text-md uppercase  text-[#12141D]"
              >
                Sign up{" "}
              </button>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
