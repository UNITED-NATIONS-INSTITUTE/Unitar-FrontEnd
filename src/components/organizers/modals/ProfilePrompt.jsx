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
  height: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
};

export default function ProfilePrompt({ openModal, handleClose }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            "@media (max-width: 600px)": {
              width: 900,
              height: 500,
            },
          }}
        >
          <Box className=" flex items-center justify-center">
            <Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "40px",
                    marginLeft: "28px",
                  },
                }}
              >
                Complete account set up by creating your profile
              </Typography>
              <Box className="flex space-x-4  mt-[40px]">
                <button
                  onClick={() => navigate("profile/create")}
                  className=" bg-custom-blue rounded-md lg:w-full sm:ml-[68px] ml-[280px] md:ml-3 lg:ml-1  w-[300px] text-center  py-6 md:py-1 lg:py-2 text-[30px] text-white hover:bg-blue-500 lg:text-[16px] "
                >
                  Proceed
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
