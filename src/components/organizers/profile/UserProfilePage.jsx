import { Avatar } from "@mui/material";
import React from "react";

const UserProfilePage = ({ formData }) => {
  return (
    <div className="right-side bg-white min-h-screen">
      <div className="mt-8">
        <h1 className="text-gray-600 text-[24px] font-bold">User Profile</h1>
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
          <p>
            <strong>First Name</strong> {formData.firstName}
          </p>
          <p className="mt-5">
            <strong>Last Name</strong> {formData.lastName}
          </p>
          <p className="mt-5">
            <strong>Residence</strong> {formData.residence}
          </p>
          <p className="mt-5">
            <strong>User ID</strong> {formData.userId}
          </p>
          <p className="mt-5">
            <strong>Gender</strong> {formData.gender}
          </p>
          <p className="mt-5">
            <strong>Date of Birth</strong> {formData.dob}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
