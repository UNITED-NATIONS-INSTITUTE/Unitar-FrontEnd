import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOrganizerHackathons } from "../../api/hackathons/hackathons";
import { selectOrganizerCode } from "../../features/organizer/organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedHackathonDetail } from "../../features/hackathon/hackathonSlice";
import HackathonMedia from "../common/utils/HackathonMedia";
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

  return (
    <div className="flex space-x-4 mt-5 ml-4">
      {hackathonsPayload.length > 0 &&
        hackathonsPayload.map((field, index) => (
          <div key={index} className="flex flex-col iems-center mb-4">
            <HackathonMedia
              cover_image_url={field.cover_image_url}
              avatar_url={field.avatar_url}
            />
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
      {hackathonsPayload < 1 && (
        <h1 className=" font-bold">
          You do not have any hackathons yet, click on create to get started
        </h1>
      )}
    </div>
  );
};
export default OrgHackathons;
