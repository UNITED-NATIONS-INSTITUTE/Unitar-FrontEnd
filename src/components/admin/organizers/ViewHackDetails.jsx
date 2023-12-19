import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { getOrganizerHackathons } from "../../../api/hackathons/hackathons";
import { selectCurrentOrganizerDetail } from "../../../features/organizer/organizerSlice";

import AdminProfile from "../AdminLogOut";

const ViewHackDetail = () => {
  const organizer = useSelector(selectCurrentOrganizerDetail);
  const organizer_id = organizer.id;

  const [organizerHackathons, setOrganizerHackathons] = useState([]);
  const fetchHackathons = () => {
    getOrganizerHackathons(organizer_id).then((res) => {
      if (res.status === 200) {
        setOrganizerHackathons(res.data);
        console.log(res.data);
      }
    });
  };

  useEffect(() => {
    fetchHackathons();
  }, []);

  return (
    <div className="bg-white p-8  min-h-screen right-side">
      <div className="flex justify-between">
        <div className="ml-60 mb-2">
          {" "}
          <h1 className="mt-0 text-gray-600 font-bold  text-[20px] relative ">
            Hackathon
          </h1>
        </div>
        <div>
          {" "}
          <AdminProfile />
        </div>
      </div>
      {organizerHackathons.map((hackathon, index) => (
        <div key="index">
          <p className="text-xs text-gray-500  flex flex-row mb-10 ml-60">
            <span>Hackathons</span>
            <img
              src="/assets/chevron-right-solid.svg"
              className="w-2 h-2 mt-[4px] "
              alt="chevron"
            />
            <span>{hackathon.title}</span>
          </p>
          <div className="ml-60">
            <div className="flex flex-row gap-[150px]">
              <div className="relative">
                {" "}
                <img
                  src={
                    hackathon.cover_image_url
                      ? hackathon.cover_image_url
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
                    hackathon.avatar_url
                      ? hackathon.avatar_url
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

              <div className="flex  items-center flex-1">
                <h1 className="mt-0 text-custom-blue font-bold  text-[48px]">
                  {hackathon.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-row gap-[200px] mt-10">
              <div>
                <div className="flex flex-row gap-10 mt-[30px]">
                  <div className="text-xs">
                    <p className="font-semibold">Location</p>
                    <p className="mt-2">{hackathon.location}</p>
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold">Status</p>
                    <p className="text-green-500 mt-2">{hackathon.status}</p>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <p className="font-semibold text-xs">Timelines</p>
                  <div className="mb-5 gap-5">
                    {hackathon.timelines &&
                      hackathon.timelines.map((field, index) => (
                        <p className="text-xs mt-2" key={index}>
                          {field.period_name}: Start{" "}
                          {moment(field.start_date).format("Do MMM YYYY")}
                        </p>
                      ))}
                  </div>
                  <p className="font-semibold text-xs">Tags</p>
                  <div className="mt-5 flex gap-5">
                    {hackathon.tags &&
                      hackathon.tags.map((field, index) => (
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
                  <p>{hackathon.prize}</p>
                </div>
              </div>
              <div className="flex flex-col w-[500px]">
                <div>
                  <p className="text-sm  font-semibold mt-5">Highlights</p>
                  <p className="text-xs mt-5">{hackathon.highlight}</p>
                </div>
                <div>
                  <p className="text-sm  font-semibold mt-5">Description</p>
                  <p className="text-xs mt-5">{hackathon.description}</p>
                </div>
                <div>
                  <p className="text-sm  font-semibold mt-5">Deliverables</p>
                  <p className="text-xs mt-5">{hackathon.deliverables}</p>
                </div>
                <div className="text-xs ">
                  <p className=" font-semibold mt-5">Goals</p>
                  <p className="mt-2">{hackathon.goals}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewHackDetail;
