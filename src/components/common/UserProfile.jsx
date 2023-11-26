import React, { useState } from "react";

const UserProfile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="relative inline-block">
      <div className="flex items-center border p-1 border-custom-grey rounded-lg space-x-2 cursor-pointer">
        <img
          src="/assets/avatar1.jpg"
          alt="profile"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-xs">Dennis Kimani</span>
        <button onClick={handleDropdown}>
          <img src="/assets/chevron.svg" alt="down" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-custom-blue text-white border rounded shadow-md">
            <ul className="py-2">
              <li className="px-4 py-2">Profile</li>
              <li className="px-4 py-2">Settings</li>
              <li className="px-4 py-2">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
