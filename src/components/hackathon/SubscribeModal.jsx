import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 250,
  bgcolor: "background.paper",
  border: "2px solid #089BD9",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function SubscribeModal({ openModal, handleClose }) {
  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className=" flex items-center justify-center">
            <Box>
              <Box className="flex space-x-4 ">
                <div>
                  <h1 className="font-bold text-[24px] text-custom-blue font-Lexend-Exa  text-center">
                    Hackathon Project Subscription
                  </h1>

                  <p className="mt-12 items-center text-gray-700 text-[20px] ">
                    You have successfully subscribed to this hackathon project
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
