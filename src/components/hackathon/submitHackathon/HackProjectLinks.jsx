import React from "react";

const HackProjectLinks = () => {
  return (
    <div className="flex flex-col ">
      <label className="mt-5 mb-2 text-xs">Project link</label>
      <input
        type="text"
        className="w-[300px] px-3 py-2 border border-grey-600 rounded text-xs
        focus:outline-none focus:border-custom-blue "
        placeholder=""
        required
      />
      <span className="text-gray-400 text-xs mt-2">Must be a url</span>
      <label className="mt-5 mb-2 text-xs">
        {" "}
        Project Demo Presentation link
      </label>
      <input
        type="text"
        className="w-[300px] px-3 py-2 border border-grey-600 rounded text-xs
        focus:outline-none focus:border-custom-blue "
        placeholder=""
        required
      />
      <label className="mt-5 mb-2 text-xs">Project live link</label>
      <input
        type="text"
        className="w-[300px] px-3 py-2 border border-grey-600 rounded text-xs
        focus:outline-none focus:border-custom-blue"
        placeholder=""
        required
      />
      <label className="mt-5 mb-2 text-xs">Project Blog link(optional)</label>
      <input
        type="text"
        className="w-[300px] px-3 py-2 border border-grey-600 rounded text-xs
        focus:outline-none focus:border-custom-blue"
        placeholder=""
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="  text-white mr-10 text-xs font-semibold bg-custom-blue  rounded-md p-2 w-[100px] mt-[20px]"
        >
          Submit project
        </button>
      </div>
    </div>
  );
};

export default HackProjectLinks;
