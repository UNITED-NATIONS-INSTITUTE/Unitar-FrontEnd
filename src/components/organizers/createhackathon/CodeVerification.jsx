import React from "react";

const CodeVerification = () => {
  return (
    <div className="min-h-screen bg-white right-side">
      <div className="ml-60">
        <h1 className=" text-gray-600 font-bold  text-[24px] mb-9 mt-10">
          Code Verification
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
          <span>Verification</span>
        </p>
        <div>
          <img
            src="/assets/amico.svg"
            className="w-[200px] h-[120px]"
            alt="logo"
          />
        </div>
        <p className="font-semibold text-sm">
          An email with a verification code has been sent to your email address.
        </p>
        <form className="mt-5 flex flex-col">
          <label htmlFor="verificationCode " className="text-xs mr-[10px]">
            Enter the code
          </label>
          <input
            className="border w-[400px] border-gray-600 focus:outline-none focus:border-custom-blue rounded h-[40px]"
            type="text"
            required
          />
          <div className="flex">
            <button
              type="submit"
              className="bg-custom-blue rounded text-white  w-[100px] mt-5  py-2 "
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-xs">
          Can't see the code?{" "}
          <button className="text-custom-blue mt-5">Resend code</button>
        </p>
      </div>
    </div>
  );
};

export default CodeVerification;
