import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { store } from "../../store/store";
const UserProfile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const openProfileMenu = () => setAnchorElNav(true);
  const closeProfileMenu = () => setAnchorElNav(null);
  const navigate = useNavigate();
  const USER_LOGOUT = "USER_LOGOUT";
  const logOut = () => {
    return {
      type: USER_LOGOUT,
    };
  };
  const handleLogOut = () => {
    store.dispatch(logOut());
  };
  return (
    <div className="relative inline-block">
      <div className="flex items-center border p-1 border-custom-grey rounded-lg space-x-2 cursor-pointer">
        <div onClick={() => openProfileMenu()}>
          <img
            src="/assets/avatar1.jpg"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs">Joe Kyle</span>
        </div>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={closeProfileMenu}
          sx={{ pt: 4 }}
        >
          <MenuItem onClick={() => navigate("/participant/profile")}>
            Profile
          </MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserProfile;
