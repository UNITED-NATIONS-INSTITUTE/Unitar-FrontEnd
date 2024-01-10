import React, { useState, useEffect } from "react";
import logo from "../../assets/unitar-logo.svg";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

import { useLocation, useNavigate } from "react-router-dom";
import { align, layers, close, menu } from "../../assets";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const OrgSidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("hackathons");
    } else if (pathnameArray[2] === "submissions") {
      setActivePage("submissions");
    }
  }, [pathnameArray]);
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery("(max-width: 912px)");
  const handleNavigation = (page) => {
    navigate(`/organizer/${page}`);
    setToggle(false); // Close the mobile menu after navigation
  };

  return (
    <>
      {isMobile ? (
        // Mobile code block
        <div className="flex justify-between items-center">
          <img src={logo} />
          <div className="lg:hidden flex justify-end text-custom-blue w-[100px]">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain text-custom-blue"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      ) : (
        <div className=" lg:flex hidden ">
          <div className="bg-light-blue w-[250px]  p-5 h-screen fixed left-0 top-0 ">
            <div className="flex justify-between">
              <img src={logo} alt="" className="w-[200px]" />
              {/* <img src="/assets/back.svg" alt="back" width="20" height="20" /> */}
            </div>
            <button
              onClick={() => handleNavigation("dashboard")}
              style={{
                borderColor: activePage === "dashboard" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 pl-6 pr-5 border rounded-md   mt-16"
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
              onClick={() => navigate("/organizer/submissions")}
              style={{
                borderColor:
                  activePage === "submissions" ? "#089BD9" : "inherit",
                transition: "border-color 0.3s",
              }}
              className="py-2 px-6 border rounded-md mt-5"
            >
              <div className="flex gap-5">
                <img src="/assets/submissions.svg" />
                <span>Submissions</span>
              </div>
            </button>
          </div>
        </div>
      )}
      {isMobile && (
        // Additional mobile code block
        <div
          className={`${
            !toggle ? "hidden" : "block"
          }   z-[1000] fixed left-0 top-0 w-full h-screen md:bg-black/70`}
        >
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } fixed z-[1000] left-0 top-0 w-full md:w-[45%] h-screen bg-[#e2edf1] pt-4 pr-2 ease-in duration-500`}
          >
            <div className="flex justify-between items-center">
              <img src={logo} />
              <div className="lg:hidden flex justify-end text-custom-blue w-[100px]">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain text-custom-blue"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
            </div>
            <div className="z-20 ml-10">
              <button
                onClick={() => handleNavigation("dashboard")}
                className="py-2 pl-6 pr-5 border rounded-md mt-16"
              >
                <div className="flex gap-5">
                  <img src={align} alt="" />
                  <span>Dashboard</span>
                </div>
              </button>
              <br />

              <button
                onClick={() => handleNavigation("hackathons")}
                className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
              >
                <div className="flex gap-5">
                  <img src={layers} alt="" />
                  <span>Hackathons</span>
                </div>
              </button>
              <br />
              <button
                onClick={() => handleNavigation("submissions")}
                className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
              >
                <div className="flex gap-4">
                  <img src={layers} alt="" />
                  <span>Submissions</span>
                </div>
              </button>
              <br />
              <button
                onClick={() => handleNavigation("profile")}
                className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
              >
                <div className="flex gap-4 text-custom-blue">
                  <CgProfile size={25} />
                  <span className="text-black">Profile</span>
                </div>
              </button>
              <br />
              <button
                onClick={() => navigate("/")}
                className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
              >
                <div className="flex gap-4 text-custom-blue">
                  <MdOutlineLogout size={25} />
                  <span className="text-black">Log out</span>
                </div>
              </button>
            </div>{" "}
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default OrgSidebar;
