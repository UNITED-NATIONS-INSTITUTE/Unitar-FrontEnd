import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/unitar-logo.svg";
import { useMediaQuery } from "@react-hook/media-query";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { align, layers, line1, users, close, menu } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
const AdminSidebar = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  useEffect(() => {
    if (pathnameArray[2] === undefined || pathnameArray[2] === "dashboard") {
      setActivePage("dashboard");
    } else if (pathnameArray[2] === "participants") {
      setActivePage("participants");
    } else if (pathnameArray[2] === "organizers") {
      setActivePage("all organizers");
    } else if (pathnameArray[2] === "hackathons") {
      setActivePage("all hackathons");
    } else if (pathnameArray[2] === "submissions") {
      setActivePage("all submissions");
    } else if (pathnameArray[2] === "users") {
      setActivePage("users");
    } else if (pathnameArray[2] === "categories") {
      setActivePage("categories");
    }
  }, [pathnameArray]);
  const [toggle, setToggle] = useState(false);

  const isMobile = useMediaQuery("(max-width: 912px)");
  const handleNavigation = (page) => {
    navigate(`/admin/${page}`);
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
        <div className="flex">
          <div className=" bg-light-blue  p-4 h-screen fixed left-0 top-0 w-[250px] ">
            <>
              <div className="flex justify-between items-center">
                <img src={logo} />
              </div>
              <img src={line1} className="mt-3" />
              <button
                onClick={() => handleNavigation("dashboard")}
                style={{
                  borderColor:
                    activePage === "dashboard" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5 "
              >
                <div className="flex gap-4">
                  <img src={align} className="ml-7" />
                  <p className=" text-[14px] ">Dashboard</p>
                </div>
              </button>

              <button
                onClick={() => navigate("/admin/participants")}
                style={{
                  borderColor:
                    activePage === "participants" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5 "
              >
                <div className="flex gap-4">
                  <img src={users} className="ml-7" />
                  <p className=" text-[14px] ">All participants</p>
                </div>
              </button>
              <button
                onClick={() => navigate("/admin/organizers")}
                style={{
                  borderColor:
                    activePage === "all organizers" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5 "
              >
                <div className="flex gap-4">
                  <img src={users} className="ml-7" />
                  <p className=" text-[14px] ">All Organizers</p>
                </div>
              </button>
              <button
                onClick={() => navigate("/admin/hackathons")}
                style={{
                  borderColor:
                    activePage === "all hackathons" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5 "
              >
                <div className="flex gap-4">
                  <img src={layers} className="ml-7" />
                  <p className=" text-[14px] ">All Hackathons</p>
                </div>
              </button>
              <button
                onClick={() => navigate("/admin/submissions")}
                style={{
                  borderColor:
                    activePage === "all submissions" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5 "
              >
                <div className="flex gap-4">
                  <img src="/assets/submissions.svg" className="ml-7" />
                  <p className=" text-[14px] ">All Submissions</p>
                </div>
              </button>
              <button
                onClick={() => navigate("/admin/users")}
                style={{
                  borderColor: activePage === "users" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5 "
              >
                <div className="flex gap-4">
                  <img src="/assets/users.svg" className="ml-7 w-7 h-7" />
                  <p className=" text-[14px]  ">Users</p>
                </div>
              </button>

              <button
                onClick={() => navigate("/admin/categories")}
                style={{
                  borderColor:
                    activePage === "categories" ? "#089BD9" : "inherit",
                  transition: "border-color 0.3s",
                }}
                className="  border rounded-md w-[200px] py-2 mt-5  "
              >
                <div className="flex gap-4">
                  <WorkspacesIcon className="ml-7 w-7 h-7 text-custom-blue " />
                  <p className=" text-[14px]">Categories</p>
                </div>
              </button>
            </>
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
                onClick={() => navigate("/organizer/dashboard")}
                className="py-2 pl-6 pr-5 border rounded-md mt-16"
              >
                <div className="flex gap-5">
                  <img src={align} alt="" />
                  <span>Dashboard</span>
                </div>
              </button>
              <br />

              <button
                onClick={() => navigate("/organizer/hackathons")}
                className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
              >
                <div className="flex gap-5">
                  <img src={layers} alt="" />
                  <span>Hackathons</span>
                </div>
              </button>
              <br />
              <button
                onClick={() => navigate("/organizer/submissions")}
                className="py-2 pl-6 pr-5 border rounded-md hover:border-custom-blue mt-5"
              >
                <div className="flex gap-4">
                  <img src={layers} alt="" />
                  <span>Submissions</span>
                </div>
              </button>
              <br />
              <button
                onClick={() => navigate("/organizer/profile")}
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
      )}{" "}
      <Outlet />
    </>
  );
};

export default AdminSidebar;
