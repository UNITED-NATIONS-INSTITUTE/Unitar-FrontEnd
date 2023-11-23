import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center mt-16">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-blue-500 overflow-y-auto ">
          <h2 className="mb-6 font-semibold">
            Login to unitar hackathon platform
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm mb-2">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="Please enter username"
              />
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="Please enter email"
              />
              <label className="block text-sm mb-2 mt-2">Password</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="password"
              />
              <label className="block text-sm mb-2 mt-2">
                {" "}
                Confirm password
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder=" confirm password"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 "
              >
                Sign me up
              </button>
              <p className="mt-5 text-sm text-gray-600">
                Already have a unitar account?
                <Link to="/login" className="text-blue-500 ml-1">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
