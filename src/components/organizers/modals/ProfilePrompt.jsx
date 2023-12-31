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
              width: 400,
              height: 300,
            },
            "@media (max-width: 280px)": {
              width: 300,
              height: 250,
            },
            "@media (max-width: 360px)": {
              width: 340,
              height: 250,
            },
            "@media (min-width: 768px)": {
              width: 600,
              height: 350,
            },
            "@media (min-width: 1024px)": {
              width: 600,
              height: 350,
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
                    fontSize: "20px",
                    marginLeft: "28px",
                    alignItems: "center",
                    paddingTop: "20px",
                  },
                  "@media (min-width: 768px)": {
                    fontSize: "32px",
                    marginLeft: "28px",
                    paddingTop: "23px",
                  },
                  "@media (min-width: 1024px)": {
                    fontSize: "24px",
                    marginLeft: "28px",
                    paddingTop: "23px",
                  },
                }}
              >
                Complete account set up by creating your profile
              </Typography>
              <Box className="flex space-x-4  mt-[40px]">
                <button
                  onClick={() => navigate("profile/create")}
                  className=" bg-custom-blue lg:w-[400px] lg:ml-[80px] rounded-md w-full   md:ml-[20px]   text-center py-6 md:text-[27px] text-[22px] text-white hover:bg-blue-500 lg:text-[18px]"
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
