import React from "react";
import { useNavigate } from "react-router-dom";
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
    <nav className=" bg-white w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="" className="ml-[45px] w-[230px]" />{" "}
      <div className=" sm:flex hidden justify-end items-center flex-1 gap-10">
        <button
          onClick={() => navigate("/login")}
          className=" btn-login text-custom-blue rounded  mr-4 w-[70px] px-2 py-2   text-[16px] transition-transform transform hover:-translate-y-1 "
        >
          Login
        </button>
        <button
          onClick={() => openModal()}
          className="inline-flex text-[16px] rounded  flex-col items-center justify-center mr-4 gap-10 p-2  text-white flex-shrink-0 rounded-10 bg-custom-blue transition-transform transform hover:-translate-y-1"
        >
          {" "}
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
