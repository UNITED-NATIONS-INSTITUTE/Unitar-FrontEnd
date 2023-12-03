import React, { useState } from "react";
import HackDetailsPart1 from "./HackDetailsPart1";
import HackDetailsPart2 from "./HackDetailsPart2";
import OrgProfile from "../../organizers/profile/OrgProfile";
import SubscribeModal from "../SubscribeModal";
const HackathonDetailsPage = () => {
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);
  const openModal = () => setOpenSubscribeModal(true);
  const closeModal = () => setOpenSubscribeModal(false);
  return (
    <div className="bg-white p-8  min-h-screen right-side">
      <div className="flex justify-between">
        <div></div>
        <h1 className="mt-0 text-gray-600 font-bold  text-[20px] relative mr-[570px]">
          Hackathon
        </h1>
        <OrgProfile />
      </div>
      <p className="text-xs text-gray-500  flex flex-row mb-10 ml-60">
        <span>Hackathons</span>
        <img
          src="/assets/chevron-right-solid.svg"
          className="w-2 h-2 mt-[4px] "
          alt="chevron"
        />
        <span>Build4SDGs</span>
      </p>
      <div className="flex gap-[100px] ml-60">
        <div>
          <HackDetailsPart1 />
        </div>
        <div>
          <SubscribeModal
            openModal={openSubscribeModal}
            handleClose={closeModal}
          />

          <HackDetailsPart2 openModal={openModal} />
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailsPage;
