import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #089BD9",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function UpdateProfileModal({ openModal, closeModal }) {
  const navigate = useNavigate();

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
                  <h1 className="font-bold text-[24px] text-custom-blue font-Lexend-Exa  text-center">
                    Profile Update
                  </h1>

                  <p className="mt-12 items-center text-gray-700 text-[20px] ">
                    Profile successfully updated
                  </p>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
