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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            "@media (max-width: 600px)": {
              width: 900,
              height: 300,
            },
            "@media (min-width: 768px)": {
              width: 900,
              height: 350,
            },
          }}
        >
          <Box className=" flex items-center justify-center">
            <Box>
              <div className="flex justify-end mb-5">
                <button onClick={handleClose}>
                  <img
                    src="/assets/Vector (2).svg"
                    alt="close"
                    className="w-[15px] h-[15px]"
                  />
                </button>
              </div>
              <Typography variant="h6" component="h4">
                Complete account set up by creating your profile
              </Typography>
              <Box className="flex space-x-4  mt-[40px]">
                <button
                  onClick={() => navigate("profile/create")}
                  className=" bg-custom-blue rounded-md md:w-full  ml-[60px]  w-[180px] text-center  py-6 md:text-[27px] text-[22px] text-white hover:bg-blue-500 lg:text-[16px] "
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
