import { Avatar } from "@mui/material";
import React from "react";

const UserProfilePage = ({ formData }) => {
  return (
    <div className="right-side  min-h-screen bg-pattern">
      <div className=" ml-60">
        <h1 className="text-gray-600 text-[24px] font-bold">User Profile</h1>
        <div className="flex flex-row gap-[100px]">
          <div className=" mt-3 flex justify-center bg-[#f0f6ff] w-[400px] rounded-md shadow-lg px-2 py-4">
            <div>
              {" "}
              <Avatar
                alt="Profile pic"
                src={formData.profileImage}
                sx={{
                  width: "200px",
                  height: "200px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <button className="bg-custom-blue text-white p-2 rounded-md hover:bg-blue-500 w-[200px] mt-4">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="mt-3 mb-2 text-gray-600 font-semibold">
              Profile Details
            </h1>
            <div className="  flex flex-col bg-[#f0f6ff] w-[400px] rounded-md shadow-lg px-2 py-4">
              <p>
                <strong className="mr-[100px] ml-[50px] text-custom-blue">
                  First Name
                </strong>{" "}
                {formData.firstName}
              </p>
              <p className="mt-5">
                <strong className="mr-[100px] ml-[50px] text-custom-blue">
                  Last Name
                </strong>{" "}
                {formData.lastName}
              </p>
              <p className="mt-5">
                <strong className="mr-[100px] ml-[50px] text-custom-blue">
                  Residence
                </strong>{" "}
                {formData.residence}
              </p>
            </div>
            <div className=" mt-3 flex flex-col bg-[#f0f6ff] w-[400px] rounded-md shadow-lg px-2 py-4">
              <p className="mt-5">
                <strong className="mr-[100px] ml-[50px] text-custom-blue">
                  User ID
                </strong>{" "}
                {formData.userId}
              </p>
              <p className="mt-5">
                <strong className="mr-[100px] ml-[50px] text-custom-blue">
                  Gender
                </strong>{" "}
                {formData.gender}
              </p>
              <p className="mt-5">
                <strong className="mr-[60px] ml-[50px] text-custom-blue">
                  Date of Birth
                </strong>{" "}
                {formData.dob}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
