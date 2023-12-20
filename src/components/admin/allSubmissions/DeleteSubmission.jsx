import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import AdminProfile from "../AdminLogOut";
import { hack } from "../../../assets";

const DeleteSubmission = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(true);
  };
  return (
    <div className="bg-white right-side min-h-screen min-w-full">
      <div className="ml-[280px]">
        <div className="flex justify-between mt-8">
          <h1 className="text-gray-600 font-bold text-[24px]">
            Submitted Hackathons
          </h1>
          <div className="mr-10">
            <AdminProfile />
          </div>
        </div>
        <div className="flex flex-wrap space-x-4  ml-4">
          <div className="flex rounded-[6px] shadow-xl flex-col border border-gray-100   w-[300px] h-[430px] transition-transform transform hover:-translate-y-1">
            <img
              className="rounded-t-[20px] w-[300px] h-[200px]"
              src={hack}
              alt=""
            />
            <p className=" text-sm ml-4 text-gray-700 mt-3 mb-1 font-bold">
              EdTechInnovation{" "}
            </p>
            <p className=" text-sm ml-4 text-gray-500">
              Redefining synchronous learning experiences.
            </p>
            <p className="mt-2 text-[12px] ml-4 w-[200px]  text-gray-500">
              A revolutionary platform designed to empower educators with
              cutting-edge tools for immersive and engaging virtual classrooms.{" "}
            </p>{" "}
            <div className=" ml-6 ">
              <button
                onClick={handleClick}
                className="bg-red-500 text-white px-2 py-1 rounded-md mt-5 w-[250px]  hover:bg-red-600 "
              >
                Delete
              </button>
            </div>
          </div>
          <DeleteModal
            openModal={isModalOpen}
            closeModal={() => setModalOpen(false)}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default DeleteSubmission;
