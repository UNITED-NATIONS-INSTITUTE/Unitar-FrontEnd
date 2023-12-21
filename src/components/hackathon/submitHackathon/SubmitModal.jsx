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
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function SubmitModal({ openModal, handleClose }) {
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
                  <div className="flex justify-center">
                    <img
                      src="/assets/success.svg"
                      alt=""
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                  <h1 className="mt-4  font-Lexend-Exa  text-center">
                    You have successfully submitted this hackathon project.
                  </h1>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
