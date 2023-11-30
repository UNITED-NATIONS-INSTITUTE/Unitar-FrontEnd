import React, { useState } from "react";
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
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #089BD9",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const customStyles = {
  fontFamily: "Lexend, sans-serif",
  marginTop: "20px",
  fontSize: "24px",
};

const customButton = {
  borderRadius: "8px",
  marginRight: "30px",
  gap: "10",
  padding: "8px",
  color: "#000",
  textTransform: "lowercase",
  fontFamily: "Inter, sans-serif",
  fontSize: "18px",
  backgroundColor: "#089bd9",
  "&:hover": { backgroundColor: "inherit" },
};

export default function BasicModal({ openModal, handleClose }) {
  const navigate = useNavigate();

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" overlay">
          <Box className=" flex items-center justify-center">
            <Box>
              <Typography variant="h6" component="h2" sx={customStyles}>
                Join as participant or an organizer{" "}
              </Typography>
              <Box className="flex space-x-4 mt-[100px]">
                <button
                  onClick={() => navigate("/part-signup")}
                  className="flex-1 bg-custom-blue text-white py-2 rounded hover:bg-blue-600 text-[16px]  "
                >
                  For Participants
                </button>
                <button
                  onClick={() => navigate("/org-signup")}
                  className="flex-1 btn-org  py-2 rounded hover:bg-blue-500 text-[16px] "
                >
                  For Organizers
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
