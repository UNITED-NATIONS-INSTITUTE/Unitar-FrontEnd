import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import { axiosApi } from "../../../api";
import { selectLoggedInUserRef } from "../../../features/user/userSlice";
const CreateOrgProfile = () => {
  // this is an org profile creation form
  // on profile creation, dispatch to redux and display this profile at org/profile/
  const org_ref = useSelector(selectLoggedInUserRef)

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    industry: "",
    user_id: org_ref,
  });
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
        // setFormData((prevData) => ({
        //   ...prevData,
        //   profile_image: newPic,
        // }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosApi
      .post("/organizers", formData)
      .then((res) => {
        if (res.status === 201) {
          alert("success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="right-side bg-white min-h-screen">
      <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
        <h1 className="text-gray-600 text-[24px] font-bold">Profile Details</h1>
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
            <span className="text-gray-700 text-xs">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 text-xs">Indutry</span>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 text-xs">Location</span>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-blue"
            />
          </label>

          <span className="text-gray-700 text-xs">Profile Image</span>
          {/* <div className="w-[450px] px-3 py-2 border border-gray-200 rounded text-xs">
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
          </div> */}

          <button
            type="submit"
            className="bg-custom-blue text-white p-2 rounded-md hover:bg-blue-500"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrgProfile;
