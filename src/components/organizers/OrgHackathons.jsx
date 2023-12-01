import React, { useState, useEffect } from "react";
// import Avatars from "../common/Avatars";
import { useNavigate } from "react-router-dom";
import { getOrganizerHackathons } from "../../api/hackathons/hackathons";
import { selectOrganizerCode } from "../../features/organizer/organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedHackathonDetail } from "../../features/hackathon/hackathonSlice";
const OrgHackathons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hackathonsPayload, setHackathonsPalyload] = useState([]);
  const org_code = useSelector(selectOrganizerCode);
  const fetchHackathons = () => {
    getOrganizerHackathons(org_code)
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
    navigate("/organizer/hackathons/detail");
  };
  const containerStyle = {
    position: "relative",
    width: "250 px",
    height: "200 px",
  };

  const coverStyle = {
    width: "250px",
    height: "200px",
  };

  const avatarStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "50px",
    height: "50px",
    borderRadius: "20px",
  };

  return (
    <div className="flex space-x-4 mt-5 ml-4">
      {hackathonsPayload.map((field, index) => (
        <div key={index} className="flex flex-col iems-center mb-4">
          <div style={containerStyle}>
            <img
              src={field.cover_image_url}
              alt="Cover image"
              style={coverStyle}
            />
            <img
              src={field.avatar_url}
              alt="Avatar image"
              style={avatarStyle}
            />
          </div>
          <p className="mt-2 text-sm  font-bold">{field.title}</p>
          <p className="mt-2 text-sm text-gray-500">{field.highlight}</p>
          <p className="mt-2 text-xs text-gray-500">{field.description}</p>
          <div className="flex gap-5">
            <button
              onClick={() => handleViewClick(field)}
              className="border border-blue-500 rounded-md text-blue-500 w-[100px] text-xs mt-4 py-1"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrgHackathons;
