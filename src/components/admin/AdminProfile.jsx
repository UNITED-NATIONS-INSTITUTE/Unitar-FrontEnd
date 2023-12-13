import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { store } from "../../store/store";

const AdminProfile = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const closeProfileMenu = () => setAnchorElNav(null);
  const openProfileMenu = () => setAnchorElNav(true);
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
      <div className=" border transition-transform transform hover:-translate-y-1 shadow-md p-1 border-custom-grey rounded-lg space-x-2 cursor-pointer">
        <div onClick={() => openProfileMenu()} className="relative right-0">
          {" "}
          <span className="text-xs">Super Admin</span>
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
          sx={{ pt: 4, mt: 6 }}
        >
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>{" "}
      </div>
    </div>
  );
};

export default AdminProfile;
