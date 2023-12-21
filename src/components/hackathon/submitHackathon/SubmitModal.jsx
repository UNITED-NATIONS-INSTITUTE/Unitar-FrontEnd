import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

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
                  <Typography
                    sx={{ marginLeft: "45px" }}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Submission Successful
                  </Typography>
                  <div className="flex justify-center">
                    <img
                      src="/assets/success.svg"
                      alt=""
                      className="w-[80px] h-[80px] mt-4"
                    />
                  </div>
                  <h1 className="mt-4  font-Lexend-Exa  text-center">
                    Thank you for submitting your project!
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
