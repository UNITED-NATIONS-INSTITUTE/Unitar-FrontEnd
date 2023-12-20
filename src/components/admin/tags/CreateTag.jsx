import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUserRef } from "../../../features/user/userSlice";
import { createTag } from "../../../api/hackathons/hackathons";
const CreateTag = () => {
  const [values, setValues] = useState({
    category: "",
  });
  const { category } = values;
  const created_by = useSelector(selectLoggedInUserRef);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createTag(category, created_by).then((res) => {
      // TO DO: Handle navigation and modal infomatics here
      if (res.status === 201) {
        alert("category created");
      } else {
        alert("Error!");
      }
    });
  };
  return (
    // TO DO: CHECK ON STYLES AND DISPLAYS
    <div className=" flex">
      <div className="ml-60">
        <div className="w-[600px] h-[400px] rounded-lg shadow-md  items-center border border-gray-100">
          <h1 className=" text-[20px] text-center font-bold mt-6">
            Create a new hackathon category
          </h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="m-4">
              <label className="block text-md m-2">Category Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="Financial Inclusion"
                value={category}
                onChange={handleChange("category")}
              />
              <button
                type="submit"
                className="w-full bg-custom-blue text-white py-2 mt-4 rounded hover:bg-white hover:text-custom-blue hover:border-2 hover:border-custom-blue "
              >
                Create Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTag;
