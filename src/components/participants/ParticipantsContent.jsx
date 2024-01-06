import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./profile/UserProfile";
import HackathonsPage from "./HackathonsPage";
import { getParticipantMetrics } from "../../api/accounts/accounts";
import { selectLoggedInUserRef } from "../../features/user/userSlice";
const ParticipantsContent = () => {
  const [stats, setStats] = useState({});
  const part_ref = useSelector(selectLoggedInUserRef);

  useEffect(() => {
    getParticipantMetrics(part_ref).then((res) => {
      setStats(res.data);
    });
  }, []);
  return (
    <div className=" lg:ml-60">
      <div className="md:flex justify-between">
        <h1 className="text-gray-600 pt-4 font-bold text-[28px]  md:text-[24px]">
          Dashboard
        </h1>
        <div className="xl:flex hidden">
          <UserProfile />
        </div>
      </div>

      <div className="md:flex mt-7 md:mt-12">
        <div className="border bg-custom-blue rounded-md text-white  w-full md:w-[250px] h-[130px] pt-5 md:mr-5">
          <span className="md:text-xs text-[18px] pt-5 p-5">
            Your Hackathons
          </span>
          <p className="p-5 font-bold">{stats.total_hackathons}</p>
        </div>
        <div className="border bg-custom-grey rounded-md   mt-5 md:mt-0 w-full md:w-[250px] h-[130px] pt-5 md:mr-5">
          <span className="md:text-xs text-[18px] p-5">
            Affiliated Organizations
          </span>
          <p className="p-5 font-bold">{stats.total_organizers}</p>
        </div>
        <div className="border bg-custom-grey rounded-md  mt-5 md:mt-0 w-full md:w-[250px] h-[130px] pt-5 md:mr-5">
          <span className="md:text-xs text-[18px] p-5">Submitted projects</span>
          <p className="p-5 font-bold">{stats.total_submissions}</p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-gray-600 md:font-semibold font-bold text-[20px] text-center md:text-left">
          Ongoing hackathons
        </h1>
        <h3 className="mt-3 md:text-sm text-[18px] font-bold">Hackathons</h3>
        <p className="text-gray-500 lg:text-sm md:text-[20px]  text-[16px] mt-2 ">
          Active Hackathons are listed here
        </p>
        <HackathonsPage />
      </div>
    </div>
  );
};

export default ParticipantsContent;
