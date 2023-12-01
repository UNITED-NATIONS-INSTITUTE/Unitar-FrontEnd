import React from "react";
import { useNavigate } from "react-router-dom";

const EmailValidation = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen right-side">
      <div className="ml-60">
        <h1 className=" text-gray-600 font-bold  text-[24px] mb-9 mt-10">
          Email Validation
        </h1>{" "}
        <p className="text-xs text-gray-500 flex flex-row mb-6">
          <span>Hackathons</span>
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px] m-1"
            alt="chevron"
          />
          <span>Create a hackathon</span>
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px] m-1"
            alt="chevron"
          />
          <span>Email validation</span>
        </p>
        <form className="flex flex-col">
          <label className="text-xs mt-5 mb-3">Enter email</label>
          <input
            type="text"
            placeholder="Enter email"
            className="border border-gray-400 rounded-md px-3 py-2 w-[300px]
            focus:outline-none focus:border-custom-blue"
          />
          <button
            onClick={() =>
              navigate("/organizer/hackathons/create/verification")
            }
            type="submit"
            className="py-2 px-2 bg-custom-blue rounded-md text-white  w-[150px] mt-10"
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailValidation;
