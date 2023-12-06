import React, { useState } from "react";
import SubscribeModal from "../SubscribeModal";
import UserProfile from "../../participants/profile/UserProfile";
import { selectSelectedHackathonDetail } from "../../../features/hackathon/hackathonSlice";
import { useSelector } from "react-redux";
import HackathonMedia from "../../common/utils/HackathonMedia";
import moment from "moment";
import { enrolToHackathon } from "../../../api/hackathons/hackathons";
import { selectCurrentParticipantDetail } from "../../../features/participant/participantSlice";
import { useNavigate } from "react-router-dom";

const HackathonDetailsPage = () => {
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);
  const openModal = () => setOpenSubscribeModal(true);
  const closeModal = () => setOpenSubscribeModal(false);
  const hackathon = useSelector(selectSelectedHackathonDetail);
  const participant = useSelector(selectCurrentParticipantDetail);
  const navigate = useNavigate();

  function subscribeToHackathon() {
    console.log(hackathon.id, participant.id);
    enrolToHackathon(hackathon.id, participant.id)
      .then((res) => {
        if (res.status === 200) {
          openModal();
          // Set a timeout for 2000 milliseconds (2 seconds)
          setTimeout(() => {
            navigate("/participant/myhackathons");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="bg-white p-8  min-h-screen right-side">
      <div className="flex justify-between">
        <div className="ml-60 mb-2">
          {" "}
          <h1 className="mt-0 text-gray-600 font-bold  text-[20px] relative ">
            Hackathon
          </h1>
        </div>

        <UserProfile />
      </div>
      <p className="text-xs text-gray-500  flex flex-row mb-10 ml-60">
        <span>Hackathons</span>
        <img
          src="/assets/chevron-right-solid.svg"
          className="w-2 h-2 mt-[4px] "
          alt="chevron"
        />
        <span>{hackathon.title}</span>
      </p>
      <div className="flex gap-[100px] ml-60">
        <div className="flex flex-col">
          <HackathonMedia
            cover_image_url={hackathon.cover_image_url}
            avatar_url={hackathon.avatar_url}
          />
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
            <div className="mt-5  gap-5">
              <div className="mt-5 gap-5">
                {hackathon.timelines &&
                  hackathon.timelines.map((field, index) => (
                    <p className="mt-2" key={index}>
                      {field.period_name}: Start{" "}
                      {moment(field.start_date).format("Do MMM YYYY ")}
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
              <p className="font-semibold ">{hackathon.prize}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-[500px]">
            <h1 className="mt-0 text-gray-600 font-bold  text-[20px]">
              {hackathon.title}
            </h1>
            {/* <p className="text-xs text-gray-600">
              Created by{" "}
              <span className="text-black font-semibold">IBM careers</span>
            </p> */}
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
            <div>
              <p className="text-sm font-semibold mt-5">Goals</p>
              {hackathon.goals}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => subscribeToHackathon()}
                className="  text-white  text-xs font-semibold bg-custom-blue  rounded-md p-2 w-[150px] mt-[50px]"
              >
                Participate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubscribeModal
          openModal={openSubscribeModal}
          handleClose={closeModal}
        />
      </div>
    </div>
  );
};

export default HackathonDetailsPage;
