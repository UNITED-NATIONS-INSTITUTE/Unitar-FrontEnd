import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { align, layers, close, menu } from "../../assets";
import { useMediaQuery } from "@react-hook/media-query";
import logo from "../../assets/unitar-logo.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");
  const pathnameArray = location.pathname.split("/");
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

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const handleNavigation = (page) => {
    navigate(`/participant/${page}`);
    setToggle(false);
  };

  return (
    <>
      {isMobile ? (
        <div className="w-full md:hidden   py-6 shadow-xl">
          <div className=" flex justify-between ">
            <img
              src={logo}
              alt="logo"
              className="ml-5 w-[100px] md:w-[120px] lg:w-[140px] "
            />{" "}
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain text-custom-blue "
              onClick={() => setToggle(!toggle)}
            />
          </div>{" "}
        </div>
      ) : (
        <div className="lg:flex hidden">
          <div className="bg-light-blue p-4 h-screen fixed left-0 top-0 w-[250px]">
            <div className="flex justify-between">
              <img src={logo} alt="" />
              <img src="/assets/back.svg" alt="back" width="20" height="20" />
            </div>
            <button
              onClick={() => handleNavigation("dashboard")}
              style={{
                borderColor: activePage === "dashboard" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border rounded-md mt-16"
            >
              <div className="flex gap-5">
                <img src={align} alt="" />
                <span>Dashboard</span>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("hackathons")}
              style={{
                borderColor:
                  activePage === "hackathons" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
            >
              <div className="flex gap-5">
                <img src={layers} alt="" />
                <span>Hackathons</span>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("myhackathons")}
              style={{
                borderColor:
                  activePage === "myhackathons" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
            >
              <div className="flex gap-4">
                <img src={layers} alt="" />
                <span>My Hackathons</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-12 lg:hidden fixed z-[1000] bg-black/90 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl w-full h-screen`}
        >
          <div className="">
            <button
              onClick={() => handleNavigation("dashboard")}
              style={{
                borderColor: activePage === "dashboard" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border text-[22px] text-white w-full rounded-md mt-16"
            >
              <div className="flex gap-5">
                <img src={align} alt="" />
                <span>Dashboard</span>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("hackathons")}
              style={{
                borderColor:
                  activePage === "hackathons" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border text-white text-[22px] w-full rounded-md hover:border-custom-blue mt-5"
            >
              <div className="flex gap-5">
                <img src={layers} alt="" />
                <span>Hackathons</span>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("myhackathons")}
              style={{
                borderColor:
                  activePage === "myhackathons" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border w-full text-white text-[22px] rounded-md hover:border-custom-blue mt-5"
            >
              <div className="flex gap-4">
                <img src={layers} alt="" />
                <span>My Hackathons</span>
              </div>
            </button>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Sidebar;
