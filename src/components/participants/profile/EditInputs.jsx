import React, { useState } from "react";

const EditInputs = () => {
  const initialFormData = {
    firstName: "Amisi",
    lastName: "Caves",
    gender: "male",
    residence: "Lagos, Nigeria",
    userId: "YourUserID123",
    dob: "",
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
        <label className="mt-5 mb-2 text-sm text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="Amisi"
        />

        <label className="mt-5 mb-2 text-sm text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="Caves"
        />
        <label className="mt-5 mb-2 text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="name@gmail.com"
        />

        <label className="mt-5 mb-2 text-sm text-gray-700">Residence</label>
        <input
          type="text"
          name="residence"
          value={formData.residence || " "}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="Lagos, Nigeria"
        />

        <label className="mt-5 mb-2 text-sm text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs
          focus:outline-none focus:border-custom-blue"
          placeholder="*******"
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
