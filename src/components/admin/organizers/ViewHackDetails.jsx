import React, { useEffect, useState } from "react";
import moment from "moment";
import { getHackathonDetails } from "../../../api/hackathons/hackathons";
import { selectCurrentOrganizerDetail } from "../../../features/organizer/organizerSlice";

import AdminProfile from "../AdminLogOut";

const ViewHackDetail = ({ hackathonId }) => {
  const organizer = selectCurrentOrganizerDetail();
  const organizer_id = organizer.id;

  const [hackathonDetails, setHackathonDetails] = useState(null);

  const fetchHackathonDetails = () => {
    getHackathonDetails(organizer_id, hackathonId).then((res) => {
      if (res.status === 200) {
        setHackathonDetails(res.data);
      }
    });
  };

  useEffect(() => {
    fetchHackathonDetails();
  }, [organizer_id, hackathonId]);

  if (!hackathonDetails) {
    return (
      <div className="bg-white p-8 min-h-screen right-side">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 min-h-screen right-side">
      <div className="flex justify-between">
        <div className="ml-60 mb-2">
          <h1 className="mt-0 text-gray-600 font-bold text-[20px] relative">
            Hackathon Details
          </h1>
        </div>
        <div>
          <AdminProfile />
        </div>
      </div>

      <div>
        {/* Display details for the specific hackathon */}
        <p>{hackathonDetails.title}</p>
        <p className="text-xs text-gray-500 flex flex-row mb-10 ml-60">
          <span>Hackathons</span>
          <img
            src="/assets/chevron-right-solid.svg"
            className="w-2 h-2 mt-[4px]"
            alt="chevron"
          />
          <span>{hackathonDetails.title}</span>
        </p>
        <div className="ml-60">
          <div className="flex flex-row gap-[150px]">
            <div className="relative">
              <img
                src={
                  hackathonDetails.cover_image_url
                    ? hackathonDetails.cover_image_url
                    : "/assets/no image (1).jpg"
                }
                alt=""
                style={{
                  borderRadius: "50%",
                  border: "3px solid #089BD9",
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              <img
                src={
                  hackathonDetails.avatar_url
                    ? hackathonDetails.avatar_url
                    : "/assets/no image (1).jpg"
                }
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100px",
                  borderRadius: "50%",
                  border: "3px solid #089BD9",
                  height: "100px",
                  left: "200px",
                  bottom: "-10px",
                  position: "absolute",
                }}
              />
            </div>

            <div className="flex items-center flex-1">
              <h1 className="mt-0 text-custom-blue font-bold text-[48px]">
                {hackathonDetails.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-row gap-[200px] mt-10">
            <div>
              <div className="flex flex-row gap-10 mt-[30px]">
                <div className="text-xs">
                  <p className="font-semibold">Location</p>
                  <p className="mt-2">{hackathonDetails.location}</p>
                </div>
                <div className="text-xs">
                  <p className="font-semibold">Status</p>
                  <p className="text-green-500 mt-2">
                    {hackathonDetails.status}
                  </p>
                </div>
              </div>
              <div className="mt-[40px]">
                <p className="font-semibold text-xs">Timelines</p>
                <div className="mb-5 gap-5">
                  {hackathonDetails.timelines &&
                    hackathonDetails.timelines.map((field, index) => (
                      <p className="text-xs mt-2" key={index}>
                        {field.period_name}: Start{" "}
                        {moment(field.start_date).format("Do MMM YYYY")}
                      </p>
                    ))}
                </div>
                <p className="font-semibold text-xs">Tags</p>
                <div className="mt-5 flex gap-5">
                  {hackathonDetails.tags &&
                    hackathonDetails.tags.map((field, index) => (
                      <span
                        key={index}
                        className="bg-custom-light-grey rounded-[40px] p-3 text-white text-xs"
                      >
                        {field.tag_name}
                      </span>
                    ))}
                </div>
              </div>
              <div className="flex flex-col text-xs mt-5">
                <p className="font-semibold mt-5 mb-2 ">Prizes</p>
                <p>{hackathonDetails.prize}</p>
              </div>
            </div>
            <div className="flex flex-col w-[500px]">
              <div>
                <p className="text-sm font-semibold mt-5">Highlights</p>
                <p className="text-xs mt-5">{hackathonDetails.highlight}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mt-5">Description</p>
                <p className="text-xs mt-5">{hackathonDetails.description}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mt-5">Deliverables</p>
                <p className="text-xs mt-5">{hackathonDetails.deliverables}</p>
              </div>
              <div className="text-xs ">
                <p className="font-semibold mt-5">Goals</p>
                <p className="mt-2">{hackathonDetails.goals}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHackDetail;
