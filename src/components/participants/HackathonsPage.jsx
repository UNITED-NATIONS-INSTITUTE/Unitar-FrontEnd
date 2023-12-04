import React, { useState, useEffect } from "react";
import Avatars from "../common/Avatars";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedHackathonDetail } from "../../features/hackathon/hackathonSlice";
import { getAllHackathons } from "../../api/hackathons/hackathons";
import HackathonMedia from "../common/utils/HackathonMedia";
const HackathonsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hackathonsPayload, setHackathonsPalyload] = useState([]);
  const fetchHackathons = () => {
    getAllHackathons()
      .then((res) => {
        if (res.status === 200) {
          setHackathonsPalyload(res.data);
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
    <div className="flex flex-wrap  space-x-4 mt-5 ml-4">
      {hackathonsPayload.length > 0 &&
        hackathonsPayload.map((field, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-gray-400 rounded-[6px] shadow-lg mb-4 w-[450px] h-[400px]"
          >
            <div className="mt-5 rounded-md border ">
              {" "}
              <HackathonMedia
                cover_image_url={field.cover_image_url}
                avatar_url={field.avatar_url}
              />
            </div>

            <p className="mt-2 text-sm font-bold">{field.title}</p>
            <p className="mt-2 text-sm text-gray-700">{field.highlight}</p>
            <p className="mt-2 text-xs text-gray-500 text-center w-[200px] ">
              {field.description}
            </p>
            <div className="flex gap-5  mb-4">
              <button
                onClick={() => handleViewClick(field)}
                className="border border-blue-500 rounded-md hover:bg-custom-blue hover:text-white   text-blue-500 w-[100px] text-xs mt-4 py-1"
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
export default HackathonsPage;
