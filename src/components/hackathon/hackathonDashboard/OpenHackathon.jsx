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
            className="  hover:border-custom-blue relative overflow-hidden border border-[#C7C7C7] rounded-[20px] shadow mb-4 w-[300px] h-[380px] transition-transform transform hover:-translate-y-1"
          >
            {" "}
            <HackathonMedia
              cover_image_url={field.cover_image_url}
              avatar_url={field.avatar_url}
            />
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white p-4 rounded-[20px] border-[#7C7C7C] border-t">
                <p className="text-sm font-bold mt-4">{field.title}</p>
                <p className="text-sm text-gray-700">{field.highlight}</p>
                <p className="text-xs text-gray-500  mt-2 h-[45px] overflow-hidden">
                  {field.description}
                </p>{" "}
              </div>
            </div>
            <div className="flex gap-5 mt-[130px] mb-[20px] ml-[20px] items-center">
              <button
                onClick={() => handleViewClick(field)}
                className="border border-blue-500 rounded-md py-2 hover:bg-custom-blue hover:text-white text-blue-500 w-[250px] text-xs "
              >
                View project
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OpenHackathon;
