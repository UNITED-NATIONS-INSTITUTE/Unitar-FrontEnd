import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { axiosApi } from "../../api";
import { adminValidateHackathon } from "../../api/hackathons/hackathons";
import { selectCurrentHackathonDetail } from "../../features/hackathon/hackathonSlice";
import { selectCurrentUserRole } from "../../features/user/userSlice";
import AddMediaModal from "./AddMediaModal";
const HackathonMedia = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const hackathonImageRef = useRef(null);
  const coverImageRef = useRef(null);
  const [formData, setFormData] = useState(new FormData());
  const [cover, setCover] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const role = useSelector(selectCurrentUserRole);
  const handleChooseFile = (fileInputRef) => {
    fileInputRef.current.click();
  };
  const hackathonDetails = useSelector(selectCurrentHackathonDetail);
  const hackathon_code = hackathonDetails.id;
  const handleFileChange = (fileInputRef) => {
    const file = fileInputRef.current.files[0];
    if (file) {
      formData.set("cover_image", file);
      setCover(file);
    }
  };
  const handleAvatarChange = (fileInputRef) => {
    const file = fileInputRef.current.files[0];
    if (file) {
      formData.set("avatar", file);
      setAvatar(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosApi
      .patch(`/hackathons/${hackathon_code}/media`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          if (role === "ADMIN") {
            adminValidateHackathon(hackathon_code).then((res) => {
              if (res.status === 200) {
                setModalOpen(true);
                setTimeout(() => {
                  setModalOpen(false);
                  navigate("/admin/organizers");
                }, 3000);
              }
            });
          } else {
            navigate("/organizer/hackathons/create/verify");
          }
        }
      });
  };

  return (
    <div className="bg-white right-side min-h-screen flex justify-center">
      <div className="ml-60 mt-10 ">
        <h1 className="text-gray-600 font-bold text-[24px] mb-9">
          Hackathon media
        </h1>
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
          <span>Add Media</span>
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-10">
            <label className="text-xs">Hackathon Image</label>
            <div className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs">
              {cover && <Typography>{cover.name}</Typography>}

              <input
                type="file"
                ref={hackathonImageRef}
                style={{ display: "none" }}
                onChange={() => handleFileChange(hackathonImageRef)}
              />
              <div className="flex justify-end">
                <label
                  className="bg-transparent w-[100px] flex justify-center text-xs border border-gray-300 px-1 py-1 rounded-md cursor-pointer"
                  onClick={() => handleChooseFile(hackathonImageRef)}
                >
                  Choose file
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs">Cover Image</label>
            <div className="w-[500px] px-3 py-2 border border-gray-400 rounded text-xs">
              {avatar && <Typography>{avatar.name}</Typography>}
              <input
                type="file"
                ref={coverImageRef}
                style={{ display: "none" }}
                onChange={() => handleAvatarChange(coverImageRef)}
              />
              <div className="flex justify-end">
                <label
                  className="bg-transparent w-[100px] flex justify-center text-xs border border-gray-300 px-1 py-1 rounded-md cursor-pointer"
                  onClick={() => handleChooseFile(coverImageRef)}
                >
                  Choose file
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="py-3 px-2 bg-custom-blue rounded-md text-white text-xs w-[100px] mt-10"
          >
            Add Images
          </button>
        </form>
      </div>
      {isModalOpen && (
        <AddMediaModal
          setModalOpen={setModalOpen}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HackathonMedia;
