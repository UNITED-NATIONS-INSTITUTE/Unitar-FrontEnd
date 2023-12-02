import { Avatar } from "@mui/material";
import React, { useRef, useState } from "react";
import UserProfilePage from "./UserProfilePage";

const UserProfileForm = () => {
  const fileInputRef = useRef(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPic = reader.result;
        setFormData((prevData) => ({
          ...prevData,
          profileImage: newPic,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    residence: "",
    userId: "",
    gender: "",
    profileImage: "",
    dob: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission send data to back end
    console.log(formData);
    setFormSubmitted(true); // Set the formSubmitted state to true
  };

  return (
    <div className="right-side min-h-screen bg-white">
      {formSubmitted ? (
        <UserProfilePage formData={formData} />
      ) : (
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <h1 className="text-gray-600 text-[24px] font-bold">
            Profile Details
          </h1>
          <Avatar
            alt="Profile pic"
            src={formData.profileImage}
            sx={{
              width: "100px",
              height: "100px",
              marginTop: "50px",
              marginBottom: "10px",
            }}
          />
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700 text-xs">First Name</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 text-xs">Last Name</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 text-xs">Residence</span>
              <input
                type="text"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
              />
            </label>

            <label className="block">
              <span className="text-gray-700 text-xs">User ID</span>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700 text-xs">Gender</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 p-2 w-full border bg-inherit rounded-md focus:outline-none focus:border-custom-blue"
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <span className="text-gray-700 text-xs">Profile Image</span>
            <div className="w-[450px] px-3 py-2 border border-gray-200 rounded text-xs">
              <label
                className="block bg-transparent w-[100px]  justify-center text-xs border border-gray-300 px-1 py-1 rounded-md cursor-pointer"
                onClick={handleChooseFile}
              >
                Choose file
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-gray-700 text-xs">Date of Birth</span>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </label>

            <button
              type="submit"
              className="bg-custom-blue text-white p-2 rounded-md hover:bg-blue-500"
            >
              Save Profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserProfileForm;
