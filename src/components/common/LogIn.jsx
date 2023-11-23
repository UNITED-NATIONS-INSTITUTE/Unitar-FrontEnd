import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-custom-blue">
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
              <label className="block text-sm mb-2 mt-2">Password</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="password"
              />
              <button
                type="submit"
                className="w-full bg-custom-blue text-white py-2 mt-4 rounded hover:bg-blue-600 "
              >
                Sign me in
              </button>
              <p className="mt-5 text-sm text-gray-600">
                Don't have a unitar account?
                <Link to="/signup" className="text-custom-blue ml-1">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
