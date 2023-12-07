import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid red",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function DeleteModal({ openModal, closeModal }) {
  return (
    <Box>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className=" flex items-center justify-center">
            <Box>
              <Box className="flex space-x-4 ">
                <div>
                  <h1 className="font-bold text-[24px] text-red-500 font-Lexend-Exa  text-center">
                    Delete Participant
                  </h1>

                  <p className="mt-12 items-center text-gray-700 text-[20px] ">
                    Do you really want to delete this participant? Deleting this
                    participant will erase all their data
                  </p>
                  <p className="mt-5 text-gray-600">Reason for deleting</p>
                  <input
                    type="text"
                    className="border border-gray-400 w-[400px] py-5 rounded-md focus:outline-none"
                  />
                  <div className="flex flex-row gap-5 mt-6">
                    <button className="bg-red-500 text-white font-bold w-[200px] py-2 px-2 rounded-md  hover:bg-red-700">
                      YES, DELETE
                    </button>
                    <button
                      onClick={closeModal}
                      className="border text-red-500 border-red-500 rounded-md w-[200px] py-2 px-2  hover:border-red-700"
                    >
                      NO, CANCEL
                    </button>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
