import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { bell, credits, def, over, proj, sharp, teams } from "../../assets";

const Header = () => {
  return (
    <div className="mt-10 mr-10">
      <div className="overflow-x-hidden right-side  rounded-xl bg-hero-pattern bg-header-pattern  bg-no-repeat bg-cover bg-center  h-[164px]">
        <p className="pt-6 text-white ml-6">Pages / Hackathons</p>
        <p className=" text-white ml-6 ">Hackathon </p>
        <div className=" relative bottom-11 rounded-lg flex justify-end gap-5 ">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 250,
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

          <div className="flex  gap-10 pr-10">
            <div className="flex items-center gap-2">
              {" "}
              <img src={def} className="" />{" "}
              <p className="text-white text-xs"> SignIn </p>
            </div>

            <img src={sharp} className="" />
            <img src={bell} />
          </div>
        </div>
      </div>
      <div className="h-[113px] rounded-[15px] w-[850px] ml-[30px] relative bottom-[50px]  bg-header-bottom  bg-no-repeat bg-cover bg-center ">
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

          <div className="flex-row flex gap-5 pr-5">
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
