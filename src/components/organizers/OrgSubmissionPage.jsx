import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatars from "../common/Avatars";
import { useNavigate } from "react-router-dom";
import OrgProfile from "./profile/OrgProfile";
import { selectOrganizerCode } from "../../features/organizer/organizerSlice";
import { setSelectedHackathonDetail } from "../../features/hackathon/hackathonSlice";
import { getOrganizerHackathons } from "../../api/hackathons/hackathons";
import HackathonMedia from "../common/utils/HackathonMedia";
const OrgSubmissionPage = () => {
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
  const handleViewClick = (hackathonDetails) => {
    dispatch(
      setSelectedHackathonDetail({ selectedHackathonDetail: hackathonDetails })
    );
    navigate("details");
  };
  useEffect(() => {
    fetchHackathons();
  }, []);
  return (
    <div className="bg-white p-8 right-side min-h-screen ">
      <div className="ml-60">
        <div className="flex justify-between">
          <h1 className="text-gray-600 font-bold text-[24px] mb-10 ">
            Submissions
          </h1>
          <OrgProfile />
        </div>
        <p className="text-gray-600 text-sm font-semibold">Our Hackathons</p>
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
                <p className="mt-2 text-xs text-gray-500">
                  {field.description}
                </p>
                <div className="flex gap-5">
                  <button
                    onClick={() => handleViewClick(field)}
                    className="border border-blue-500 rounded-md text-blue-500 w-[150px] text-xs mt-4 py-1"
                  >
                    View submissions
                  </button>

                  <Avatars />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrgSubmissionPage;
