import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { selectSelectedHackathonDetail } from "../../../features/hackathon/hackathonSlice";
import { deleteHackathon } from "../../../api/hackathons/hackathons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 280,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function DeleteHackModal({ openModal, closeModal }) {
  const hackathon = useSelector(selectSelectedHackathonDetail);
  const hackathon_code = hackathon.id;
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null); // New state for error

  const navigate = useNavigate();

  function handleDelete(id) {
    deleteHackathon(id).then((res) => {
      if (res.status === 204) {
        alert("Hackathon entry deleted");
      } else {
        alert("error removing entry");
      }
    });
  }

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="flex items-center justify-center">
            <Box>
              <Box className="flex space-x-4 ">
                <div>
                  <h1 className="font-bold text-[20px] font-Lexend-Exa text-center">
                    Delete Hackathon
                  </h1>
                  <div className="flex justify-center ">
                    <img
                      src="/assets/bin.jpg"
                      alt=""
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                  <p className="text-center text-gray-700 text-sm ">
                    {error ? (
                      <span className="text-red-500">{error}</span>
                    ) : (
                      "Do you really want to delete this Hackathon? Deleting this Hackathon will erase all their data"
                    )}
                  </p>

                  <div className="flex flex-row gap-5 mt-5 justify-center">
                    <button
                      onClick={() => handleDelete(hackathon_code)}
                      className="bg-[#D40C0C] text-white font-bold w-[150px] py-2 px-2 rounded-md "
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={closeModal}
                      className="py-2 border border-black rounded-md w-[150px]"
                    >
                      No, Cancel
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
