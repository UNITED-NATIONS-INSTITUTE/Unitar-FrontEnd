import { Avatar } from "@mui/material";
import React from "react";
import UserProfile from "../common/UserProfile";
import ProfileInputs from "./ProfileInputs";

const ProfileDetails = () => {
  return (
    <div className="overflow-y-auto  ml-60 flex  profile-details ">
      <div className="flex flex-col flex-1">
        <h1 className="mt-0 text-gray-600 font-bold mb-10 text-[20px] ">
          Profile
        </h1>
        <span className="text-sm font-semibold">Profile</span>
        <span className="text-sm text-gray-500 mt-2">
          Update your profile photo and details here
        </span>
        <hr className="w-[600px] mt-6" />
        <ProfileInputs />
      </div>
      <div className="flex-2 flex-col flex">
        <div className="flex justify-end mt-0 user-profile">
          <UserProfile />
        </div>

        <Avatar
          alt="Remy Sharp"
          src="/assets/avatar1.jpg"
          sx={{ width: "100px", height: "100px", marginTop: "50px" }}
        />
        <span className=" text-sm mt-5">Your photo</span>
        <span className="text-gray-500 text-xs mt-2">
          This will be displayed on your profile
        </span>
        <div className="flex gap-5 mt-5">
          <button className="text-red-600 text-xs">Delete</button>
          <button className="text-xs text-custom-purple">Update</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
