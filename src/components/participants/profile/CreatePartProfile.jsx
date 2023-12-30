import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { axiosApi } from "../../../api";
import { selectLoggedInUserRef } from "../../../features/user/userSlice";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";

const CreatePartProfile = () => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const openModal = () => setOpenSuccessModal(true);
  const closeModal = () => setOpenSuccessModal(false);
  const navigate = useNavigate();

  const part_ref = useSelector(selectLoggedInUserRef);
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    residence: "",
    gender: "",
    date_of_birth: "",
    user_id: part_ref,
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
        //   profileImage: newPic,
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
      .post("/participants", formData)
      .then((res) => {
        if (res.status === 201) {
          setSuccessMessage(true);
          openModal();

          setTimeout(() => {
            closeModal();
            navigate("/participant");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {successMessage && (
        <SuccessModal openModal={openModal} handleClose={closeModal} />
      )}

      <div className="md:right-side bg-white min-h-screen bg-pattern">
        <form className=" md:ml-80 mt-4" onSubmit={handleSubmit}>
          <h1 className="text-gray-600 text-[24px] font-bold">
            Profile Details
          </h1>
          <div className="w-[500px] h-[140px] rounded-md shadow-lg bg-[#f0f6ff] mt-5 mb-5">
            <div className="flex items-center ml-4 justify-between">
              <Avatar
                alt="Profile pic"
                src={formData.profileImage}
                sx={{
                  width: "100px",
                  height: "100px",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              />
              <div>
                <label
                  className=" mr-5  bg-transparent w-[120px]   text-xs border text-custom-blue border-custom-blue  px-2 py-2 rounded-md cursor-pointer"
                  onClick={handleChooseFile}
                >
                  Add an Image
                  <input type="file" style={{ display: "none" }} />
                </label>
              </div>
            </div>
          </div>
          <h1 className="mb-2 text-gray-600 font-semibold">
            Profile Information here
          </h1>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-row gap-[40px]">
              <div className=" px-10 py-3 w-[400px] h-[250px] rounded-md shadow-lg bg-[#f0f6ff] mt-5 mb-5">
                <label className="flex flex-col">
                  <span className="text-gray-700 text-xs mt-[10px]">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="mt-1 mb-2 p-2 w-[300px] border bg-inherit border-gray-600 rounded-md focus:outline-none focus:border-custom-blue"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-gray-700 text-xs">Last Name</span>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="mt-2 mb-2 p-2 w-[300px] border bg-inherit border-gray-600 rounded-md focus:outline-none focus:border-custom-blue"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-gray-700 text-xs ">Residence</span>
                  <input
                    type="text"
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    className="mt-2 p-2 w-[300px] bg-inherit border-gray-600 border rounded-md focus:outline-none focus:border-custom-blue"
                  />
                </label>
              </div>
              <div className=" px-10 w-[400px] h-[250px] rounded-md shadow-lg bg-[#f0f6ff] mt-5 mb-5">
                <label className="flex flex-col">
                  <span className="text-gray-700 text-xs mt-5">Gender</span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 p-2 w-[300px] mb-8 text-sm border  bg-inherit border-gray-600 rounded-md focus:outline-none focus:border-custom-blue"
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="text-gray-700 text-xs">Date of Birth</span>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className="mt-1 p-2 w-[300px] text-xs border bg-inherit border-gray-600 rounded-md focus:outline-none focus:border-custom-blue"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-custom-blue text-white p-2 rounded-md hover:bg-blue-500 w-[150px] mt-7"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePartProfile;
