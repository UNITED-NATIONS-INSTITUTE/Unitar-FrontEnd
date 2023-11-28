import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { bell, credits, def, over, proj, sharp, teams } from "../../assets";

const Header = () => {
  return (
    <div>
      <div className="ml-40 overflow-x-hidden right-side  rounded-xl bg-hero-pattern bg-header-pattern  bg-no-repeat bg-cover bg-center  h-[164px]">
        <p className="pt-6 text-white ml-6">Pages / Hackathons</p>
        <p className=" text-white ml-6 ">Hackathon </p>
        <div className=" relative bottom-11 rounded-lg ml-[550px] flex items-center gap-5 ">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
              borderRadius: "20px",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Type"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            ></IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>

          <div className="flex items-center  gap-5">
            <p className="flex items-center">
              {" "}
              <img src={def} className="ml-4" />{" "}
              <span className="text-white text-xs"> Sign In </span>
            </p>

            <img src={sharp} className="" />
            <img src={bell} />
          </div>
        </div>
      </div>
      <div className="h-[113px] w-[1000px] rounded-[15px] relative left-[200px] bottom-[50px]  bg-header-bottom  bg-no-repeat bg-cover bg-center ">
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            {" "}
            <img src={credits} className="w-[80px]  pt-4 pl-4" />{" "}
            <p className="font-semibold ">
              United Nations
              <br />
              <span className="font-normal text-[#718096] ">
                {" "}
                unitednations.org{" "}
              </span>
            </p>
          </div>

          <div className="flex-row flex gap-5 mr-6">
            {" "}
            <div className="flex items-center ">
              <img src={over} />
              <p>Overview</p>
            </div>
            <div className="flex items-center">
              <img src={teams} />
              <p>Teams</p>
            </div>
            <div className="flex items-center">
              <img src={proj} />
              <p>Projects</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
