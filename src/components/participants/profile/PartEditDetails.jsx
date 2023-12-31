import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { axiosApi } from "../../../api";
import { useSelector } from "react-redux";
import { selectCurrentParticipantDetail } from "../../../features/participant/participantSlice";
import UserProfile from "./UserProfile";
import UpdateProfileModal from "./UpdateProfileModal";
import { useNavigate } from "react-router-dom";
const PartEditDetails = () => {
  const participantProfile = useSelector(selectCurrentParticipantDetail);
  const [profilePic, setProfilePic] = useState("");
  const [formData, setFormData] = useState(participantProfile);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosApi.patch(`/participants/${participantProfile.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);

        navigate("/participant");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  function handleProfileUpdate() {
    const imageData = new FormData();
    imageData.append("profile_image", profilePic);
    axiosApi.patch(`/participants/${participantProfile.id}`, imageData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  return (
    <div className="bg-white p-8 lg:right-side min-h-screen">
      <div className="lg:overflow-y-auto xl:ml-60  lg:flex profile-details">
        <div className="flex flex-col flex-1">
          <h1 className="mt-0 xl:text-sm md:text-[20px] text-[20px]   text-gray-600 font-bold mb-10 ">
            Profile
          </h1>
          <span className="xl:text-sm md:text-[20px] text-[16px]  font-semibold">
            Profile
          </span>
          <span className="xl:text-sm md:text-[20px] text-[16px]  text-gray-500 mt-2">
            Update your details and profile photo here.
          </span>
          <hr className="lg:w-[600px] mt-6" />
          <div className="lg:flex flex-col">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="mt-5 mb-2 xl:text-sm md:text-[20px] text-[16px]  text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name || " "}
                onChange={handleChange}
                className="lg:w-[500px]  xl:text-sm md:text-[16px] text-[14px]  px-3 py-2 border border-gray-400 rounded
          focus:outline-none focus:border-custom-blue"
                placeholder="John"
              />
              <label className="mt-5 mb-2  xl:text-sm md:text-[20px] text-[16px]  text-gray-700">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email || " "}
                onChange={handleChange}
                className="lg:w-[500px] px-3 py-2 border border-gray-400 rounded xl:text-sm md:text-[16px] text-[14px]
          focus:outline-none focus:border-custom-blue"
                placeholder="Doe"
              />
              <label className="mt-5 mb-2  xl:text-sm md:text-[20px] text-[16px]  text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city || " "}
                onChange={handleChange}
                className="lg:w-[500px] px-3 py-2 border border-gray-400 rounded xl:text-sm md:text-[16px] text-[14px]
          focus:outline-none focus:border-custom-blue"
                placeholder="Lagos, Nigeria"
              />
              <label className="mt-5 mb-2  xl:text-sm md:text-[20px] text-[16px]  text-gray-700">
                Date of Birth
              </label>
              <input
                type="text"
                name="date_of_birth"
                value={formData.date_of_birth || " "}
                onChange={handleChange}
                className="lg:w-[500px] px-3 py-2 border border-gray-400 rounded xl:text-sm md:text-[16px] text-[14px]
          focus:outline-none focus:border-custom-blue"
                placeholder="YYYY-MM-DD"
              />{" "}
              <button
                type="submit"
                className="text-white font-semibold bg-custom-blue rounded-md p-2 w-[150px] mt-10"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
        <div className="flex-2 flex-col flex">
          {/* <div className="flex justify-end mt-0 user-profile">
            <UserProfile />
          </div> */}
          <Avatar
            alt="Profile pic"
            src={formData.profile_image_url}
            sx={{ width: "100px", height: "100px", marginTop: "50px" }}
          />
          <span className=" xl:text-sm md:text-[20px] text-[16px]  mt-5">
            Your photo
          </span>
          <span className="text-gray-500  xl:text-sm md:text-[20px] text-[16px] mt-2">
            This will be displayed on your profile
          </span>
          <div className="flex gap-5 mt-5">
            <label className="xl:text-sm md:text-[16px] text-[14px] text-custom-purple">
              New Profile Image
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
            <button
              className="text-red-600 xl:text-sm md:text-[16px] text-[14px]"
              onClick={handleProfileUpdate}
            >
              Update Image
            </button>
          </div>
        </div>
      </div>
      <UpdateProfileModal
        openModal={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
};

export default PartEditDetails;
