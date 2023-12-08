import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

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
          <div className="mr-10">{/* <UserProfile /> */}</div>
        </div>
        <div className="flex flex-wrap space-x-4 mt-5 ml-4">
          <div className="flex rounded-[6px] shadow-xl flex-col border border-gray-100   w-[300px] h-[450px] transition-transform transform hover:-translate-y-1">
            <img
              className="rounded-md w-[300px] h-[200px]"
              src="/assets/image2.png"
              alt="image"
            />
            <p className="mt-2 text-sm ml-4 text-gray-500">EdTechInnovation </p>
            <p className="mt-2 text-sm ml-4 font-bold">
              Redefining synchronous learning experiences.
            </p>
            <p className="mt-2 text-[12px] ml-4 w-[200px]  text-gray-500">
              A revolutionary platform designed to empower educators with
              cutting-edge tools for immersive and engaging virtual classrooms.{" "}
            </p>{" "}
            <div className=" ml-12">
              <button
                onClick={handleClick}
                className="bg-red-500 text-white px-3 py-2 rounded-md mt-5  w-[200px] hover:bg-red-700 "
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
