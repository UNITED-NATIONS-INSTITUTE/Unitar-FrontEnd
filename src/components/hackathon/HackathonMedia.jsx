import React, { useRef } from "react";

const HackathonMedia = () => {
  const fileInputRef = useRef(null);
  const handleChooseFile = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="bg-white right-side min-h-screen  ">
      <div className="ml-60 mt-10">
        <h1 className=" text-gray-600 font-bold  text-[24px] mb-9">
          Hackathon media{" "}
        </h1>{" "}
        <p className="text-xs text-gray-500 flex flex-row mb-6">
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
          <span>Media</span>
        </p>
        <form className="flex flex-col">
          <div className="mb-10">
            {" "}
            <label>Hackathon Image</label>
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
            </div>{" "}
          </div>

          <div>
            {" "}
            <label>Cover Image</label>
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
            </div>{" "}
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

export default HackathonMedia;
