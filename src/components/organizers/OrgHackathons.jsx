import React, { useState, useEffect } from "react";
import Avatars from "../common/Avatars";
import { useNavigate } from "react-router-dom";
import { getOrganizerHackathons } from "../../api/hackathons/hackathons";
import { selectOrganizerCode } from "../../features/organizer/organizerSlice";
import { useSelector } from "react-redux";
const OrgHackathons = () => {
  const navigate = useNavigate();
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

  return (
    <div className="flex space-x-4 mt-5 ml-4">
      {hackathonsPayload.map((field, index) => (
        <div key={index} className="flex flex-col w-[400] h- mb-4 ">
          <img
            className="rounded-md w-[250px] h-[200px]"
            key={index}
            src={field.avatar_url}
            alt={`Image#${index + 1}`}
          />
          <p className="mt-2 text-sm  font-bold">{field.title}</p>
          <p className="mt-2 text-sm text-gray-500">{field.highlight}</p>
          <p className="mt-2 text-xs text-gray-500">{field.description}</p>
          <div className="flex gap-5">
            <button
              onClick={() => navigate("/organizer/dashboard/detail")}
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
