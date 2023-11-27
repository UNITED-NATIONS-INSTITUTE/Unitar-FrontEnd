import { TextField } from "@mui/material";
import React from "react";
import UserProfile from "../../common/UserProfile";

const CreateHackathon = () => {
  return (
    <div className="ml-60 bg-white p-8 right-side min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-gray-600 font-bold text-[24px]">Hackathons</h1>
        <UserProfile />
      </div>
      <p className="text-xs text-gray-500 flex flex-row">
        <span>Hackathons</span>
        <img
          src="/assets/chevron-right-solid.svg"
          className="w-2 h-2 mt-[4px] m-1"
          alt="chevron"
        />
        <span>Create a hackathon</span>
      </p>
      <p className="font-bold mt-5 mb-5">Create a hackathon</p>
      <div className="flex">
        <div>
          <form className="flex gap-[100px]">
            <div className="flex flex-col ">
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Hackathon title
              </label>
              <input
                type="text"
                className="w-[400px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                placeholder=""
                required
              />
              <span className="text-xs text-gray-400 mt-2">
                Do not exceed 20 character writing the project name
              </span>
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Highlight
              </label>
              <input
                type="text"
                className="w-[400px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                placeholder=""
                required
              />
              <label className="mt-5 mb-2 text-xs" name="projectDescription">
                Description
              </label>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=""
              />
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Location
              </label>
              <input
                type="text"
                className="w-[400px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                placeholder=""
                required
              />
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Hackathon tags
              </label>
              <div className="flex flex-row border-gray-200 rounded p-2 border gap-2">
                <p className="bg-blue-200 p-2 rounded-md  text-xs text-custom-blue">
                  Finance
                </p>
                <p className="bg-blue-200 p-2 rounded-md  text-xs text-custom-blue">
                  Education
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Hackathon project deliverables
              </label>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=""
                sx={{ width: "400px" }}
              />
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Hackathon project Goals
              </label>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=""
              />
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Hackathon prizes
              </label>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue=""
              />
              <label className="mt-5 mb-2 text-xs " name="projectName">
                Hackathon timeline
              </label>
              <div className="flex flex-row gap-5">
                <input
                  type="date"
                  className="w-[130px] px-3 py-2 border border-gray-400 rounded  text-gray-500 text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder=""
                  required
                />
                <input
                  type="date"
                  className="w-[130px] px-3 py-2 border border-gray-400  text-gray-500 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder=""
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="  text-white  text-xs font-semibold bg-custom-blue  rounded-md p-2 w-[100px] mt-[20px]"
                >
                  Submit project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateHackathon;
