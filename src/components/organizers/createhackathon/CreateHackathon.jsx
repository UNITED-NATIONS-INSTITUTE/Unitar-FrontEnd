import React, { useState } from "react";
import UserProfile from "../../common/UserProfile";
import { TextField, Button } from "@mui/material";
import TagSelector from "./TagSelector";
const CreateHackathon = () => {
  const [tags, setTags] = useState([]);
  const readCategories = (categoriesArray) => {
    setTags(categoriesArray);
  };
  return (
    <div className="bg-white p-8 right-side min-h-screen">
      <div className="ml-60">
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
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px] m-1"
            alt="chevron"
          />
          <span>Basic details</span>
        </p>
        {/* <p className="font-bold mt-5 mb-5">Create a hackathon</p> */}
        <div className="flex">
          <div>
            <form className="flex gap-[100px]">
              <div className="flex flex-col ">
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon title
                </label>
                <input
                  type="text"
                  className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder="Stack a Stake Competition"
                  required
                />
                {/* <span className="text-xs text-gray-400 mt-2">
                  Do not exceed 20 character writing the project name
                </span> */}
                <label
                  className="mt-5 mb-2 text-xs font-semibold"
                  name="projectName"
                >
                  Hackathon highlight Phrase
                </label>
                <input
                  type="text"
                  className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder="Building for the future"
                  required
                />
                <label
                  className="mt-5 mb-2 text-xs font-semibold"
                  name="projectName"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
        focus:outline-none focus:border-custom-blue "
                  placeholder="virtual, hybrid, onsite, etc"
                  required
                />
                <label
                  className="font-semibold mt-5 mb-2 text-xs"
                  name="projectDescription"
                >
                  Description
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                />

                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon categories
                </label>
                <div className="flex flex-row border-gray-200 rounded p-2 border gap-2">
                  <TagSelector func={readCategories} />
                </div>
                <label
                  className=" font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Timelines
                </label>
                <div className="flex flex-row gap-5">
                  <Button
                    variant="outlined"
                    // onClick={() => handleAddContactItems()}
                  >
                    Create Timeline
                  </Button>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon project deliverables
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                  sx={{ width: "450px" }}
                />
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon project Goals
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <label
                  className="font-semibold mt-5 mb-2 text-xs "
                  name="projectName"
                >
                  Hackathon prizes
                </label>
                <TextField
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="  text-white  text-xs font-semibold bg-custom-blue  rounded-md p-2 w-[200px] mt-[20px]"
                  >
                    Submit Hackathon details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHackathon;
