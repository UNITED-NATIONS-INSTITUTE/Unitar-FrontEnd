import React, { useRef } from "react";
import HackProjectLinks from "./HackProjectLinks";
import { TextField } from "@mui/material";
import UserProfile from "../../common/UserProfile";

const SubmitHackDetails = () => {
  const fileInputRef = useRef(null);
  const handleChooseFile = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="ml-60">
      <div className="flex justify-between">
        <h1 className="mt-5 text-gray-600 font-bold  text-[24px]">
          Hackathons
        </h1>
        <UserProfile />
      </div>
      <p className="text-xs text-gray-500 flex mb-10 flex-row">
        <span>Hackathons</span>
        <img
          src="/assets/chevron-right-solid.svg"
          className="w-2 h-2 mt-[4px] m-1"
          alt="chevron"
        />
        <span>Build4SDGs</span>
        <img
          src="/assets/chevron-right-solid.svg"
          className="w-2 h-2 mt-[4px] m-1"
          alt="chevron"
        />
        <span>Submit a project</span>
      </p>
      <h3 className="text-sm font-semibold mb-3 text-[15px]">
        Submit a project
      </h3>
      <form className="flex gap-[100px]">
        <div className="flex flex-col ">
          <label className="mt-5 mb-2 text-xs " name="projectName">
            Project title
          </label>
          <input
            type="text"
            className="w-[400px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
            placeholder=""
            required
          />
          <span className="text-xs text-gray-500 mt-2">
            Do not exceed 20 character writing the project name
          </span>
          <label className="mt-5 mb-2 text-xs" name="projectDescription">
            Project description
          </label>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue=""
          />
          <label className="mt-5 mb-2 text-xs" name="projectImage">
            Project image
          </label>
          <div
            className="w-[500px]  px-3 py-2 border border-gray-400 rounded text-xs"
            s
          >
            <input
              placeholder=""
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <div className="flex justify-end">
              <label
                htmlFor="fileInput"
                className="bg-transparent w-[100px]  flex justify-center text-xs border border-gray-300 px-1 py-1 rounded-md cursor-pointer "
                onClick={handleChooseFile}
              >
                Choose file
              </label>
            </div>
          </div>
        </div>
        <div className="flex-col flex">
          <HackProjectLinks />
        </div>
      </form>
    </div>
  );
};

export default SubmitHackDetails;
