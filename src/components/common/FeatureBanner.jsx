import React from "react";

const FeatureBanner = ({ icon, heading, text }) => {
  return (
    <div className="lg:ml-20 ml-5 mb-10">
      {" "}
      <img src={icon} alt="Feature Icon" className="w-15 h-10  " />
      <h4 className="text-white text-lg text-left font-inter font-bold mt-4">
        {heading}
      </h4>
      <p className="text-white lg:w-[200px] md:text-xl lg:text-base text-left mt-2">
        {text}
      </p>
    </div>
  );
};

export default FeatureBanner;
