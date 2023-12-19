import React from "react";

const CreateTag = () => {
  return (
    <div className="min-h-screen bg-white right-side">
      <div className=" flex  items-center justify-center mt-10  ">
        <div className="ml-60">
          <div className="w-[600px] h-[400px] rounded-lg shadow-md  items-center border border-gray-100">
            <h1 className=" text-[28px] text-custom-blue text-center font-bold mt-6">
              Create a Tag
            </h1>
            <form className="text-center mt-10">
              <label className="block text-sm ">Enter name</label>
              <input
                type="email"
                className="w-[200px] px-3 py-2 border border-grey-600 rounded text-xs mb-2"
                placeholder="finance"
              />{" "}
              <br />
              <button
                type="submit"
                className="mt-[100px] bg-custom-blue text-white py-2 px-8 rounded hover:bg-white hover:text-custom-blue hover:border-2 hover:border-custom-blue "
              >
                Create a Tag
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTag;
