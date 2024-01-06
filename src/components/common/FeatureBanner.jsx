import React from "react";

const FeatureBanner = ({ icon, heading, text }) => {
  return (
    <div className="ml-20 banner-container">
      <div className="bg-[rgb(255,255,255,0.9)] rounded w-[60px] h-[60px] px-2 py-2">
        {" "}
        <img src={icon} alt="Feature Icon" className="w-10 h-10 " />
      </div>

      <h4 className="text-custom-blue text-lg text-left font-inter font-bold mt-4">
        {heading}
      </h4>
      <p className="text-white w-[308px] text-left mt-2">{text}</p>
    </div>
  );
};

export default FeatureBanner;
