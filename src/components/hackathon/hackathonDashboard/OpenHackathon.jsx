import React, { useState, useEffect } from "react";
import Avatars from "../../common/Avatars";
import { useNavigate } from "react-router-dom";
import { getAllHackathons } from "../../../api/hackathons/hackathons";
import { useDispatch } from "react-redux";
import { setSelectedHackathonDetail } from "../../../features/hackathon/hackathonSlice";
import HackathonMedia from "../../common/utils/HackathonMedia";
const OpenHackathon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hackathonsPayload, setHackathonsPayload] = useState([]);
  const fetchHackathons = () => {
    getAllHackathons()
      .then((res) => {
        if (res.status === 200) {
          setHackathonsPayload(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchHackathons();
  }, []);
  const handleViewClick = (hackathonDetails) => {
    dispatch(
      setSelectedHackathonDetail({ selectedHackathonDetail: hackathonDetails })
    );
    navigate("/participant/hackathons/detail");
  };
  return (
    <div className="flex flex-wrap space-x-4 mt-5 ml-4">
      {hackathonsPayload.length > 0 &&
        hackathonsPayload.map((field, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-4 w-[440px] h-[400px] border border-gray-100 shadow-xl rounded-[6px] transition-transform transform hover:-translate-y-1"
          >
            <div className="mt-4">
              <HackathonMedia
                cover_image_url={field.cover_image_url}
                avatar_url={field.avatar_url}
              />{" "}
            </div>

            <p className="mt-2 text-sm  font-bold">{field.title}</p>
            <p className="mt-2 text-sm text-gray-500">{field.highlight}</p>
            <p className="mt-2 text-xs text-gray-500 text-center w-[250px] ">
              {field.description}
            </p>
            <div className="flex gap-5">
              <button
                onClick={() => handleViewClick(field)}
                className="border border-blue-500 rounded-md text-blue-500 hover:bg-custom-blue hover:text-white w-[100px] text-xs mt-4 py-1"
              >
                View project
              </button>

              <Avatars />
            </div>
          </div>
        ))}
    </div>
  );
};

export default OpenHackathon;
