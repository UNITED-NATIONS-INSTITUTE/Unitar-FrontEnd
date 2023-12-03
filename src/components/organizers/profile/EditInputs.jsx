import React, { useState } from "react";

const EditInputs = () => {
  const initialFormData = {
    name: "Google",
    industry: "Tech",
    location: "USA",
    userId: "YourUserID123",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mt-5 mb-2 text-sm text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="Google"
        />

        <label className="mt-5 mb-2 text-sm text-gray-700">Industry</label>
        <input
          type="text"
          name="industry"
          value={formData.industry || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="Tech"
        />

        <label className="mt-5 mb-2 text-sm text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="USA"
        />

        <button
          type="submit"
          className="text-white font-semibold bg-custom-blue rounded-md p-2 w-[150px] mt-5"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditInputs;
