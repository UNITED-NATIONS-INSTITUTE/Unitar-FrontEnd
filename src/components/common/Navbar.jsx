import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
    <nav className=" bg-white w-full py-6 justify-between items-center flex navbar">
      <img src={logo} alt="" className="lg:ml-[45px] lg:w-[230px] w-[100px] " />{" "}
      <div className=" flex  justify-end items-center flex-1 gap-10">
        <button
          onClick={() => navigate("/login")}
          className="lg:flex hidden btn-login text-custom-blue rounded  mr-4 w-[70px] px-2 py-2   text-[16px] transition-transform transform hover:-translate-y-1 "
        >
          Login
        </button>
        <button
          onClick={() => openModal()}
          className="lg:inline-flex hidden text-[16px] rounded  flex-col items-center justify-center mr-4 gap-10 p-2  text-white flex-shrink-0 rounded-10 bg-custom-blue transition-transform transform hover:-translate-y-1"
        >
          {" "}
          Sign up
        </button>
      </div>{" "}
      <div className="lg:hidden ml-auto gap-10" onClick={handleNav}>
        <AiOutlineMenu size={50} className="flex" />
      </div>
      <div
        className={
          nav
            ? "  z-[1000] fixed left-0 top-0 w-full h-screen md:bg-black/70"
            : " "
        }
      >
        <div
          className={
            nav
              ? "fixed z-[1000] left-0 top-0 w-full md:w-[45%] h-screen bg-[#e2edf1] pt-4 pr-2 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-400 "
          }
        >
          <div className="flex w-full items-center justify-between gap-10">
            <img src={logo} className="w-[100px]" />
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose onClick={handleNav} />
            </div>
          </div>
          <div className="mt-[50px] ml-20 ">
            <button
              onClick={() => navigate("/login")}
              className="  uppercase rounded  mr-4 w-[70px] px-2 py-2   text-[16px] transition-transform transform hover:-translate-y-1 "
            >
              Login
            </button>
            <br />
            <button
              onClick={() => openModal()}
              className="mt-6 text-[16px] uppercase rounded  flex-col items-center justify-center mr-4 gap-10 p-2  flex-shrink-0 rounded-10  transition-transform transform hover:-translate-y-1"
            >
              {" "}
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
