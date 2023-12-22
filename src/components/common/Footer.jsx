import React from "react";
import logo from "../../assets/unitar-logo.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { line } from "../../assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-[#12141D]">
      <div className="text-center lg:text-3xl pt-11 font-semibold font-lexend-exa">
        Ignite innovation today - <br /> sign up now for the ultimate <br />{" "}
        hackathon experience
      </div>
      <div className="flex items-center justify-center lg:mt-4 mt-9">
        <button
          onClick={() => navigate("/login")}
          className="bg-[#089BD9] text-white p-[16px] text-center h-[55px] w-[192px] rounded-[5px]"
        >
          Get Started
        </button>
      </div>

      <div className="lg:flex  justify-between lg:mt-[200px] mt-10 lg:ml-[40px] ml-[70px] border-b-3 border-black">
        <img src={logo} />

        <div className="flex justify-center gap-6 mr-[80px] lg:mr-[50px] mt-10 lg:mt-1 text-custom-blue">
          <FaFacebookF size="30" />
          <FaTwitter size="30" />
          <FaInstagram size="30" />
          <FaGithub size="30" />
        </div>
      </div>
      <img src={line} className="mt-3" />

      <div className="flex justify-between mt-5">
        <p className="ml-11">
          {" "}
          © Copyright {currentYear}, All Rights Reserved
        </p>

        <p className="mr-11"> Privacy Policy Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
