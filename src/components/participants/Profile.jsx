import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <div className="flex min-h-screen">
      <ProfileSidebar />
      <div className="bg-white p-8 right-side">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Profile;
