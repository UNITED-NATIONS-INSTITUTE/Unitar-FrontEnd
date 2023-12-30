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
              width: 600,
              height: 350,
            },
            "@media (min-width: 1024px)": {
              width: 800,
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
                    fontSize: "30px",
                    marginLeft: "28px",
                    paddingTop: "23px",
                  },
                }}
              >
                Complete account set up by
                <br /> creating your profile
              </Typography>
              <Box className="flex space-x-4  mt-[40px]">
                <button
                  onClick={() => navigate("profile/create")}
                  className=" bg-custom-blue rounded-md md:w-full  ml-[60px] md:ml-[20px]  w-[180px] text-center  py-6 md:text-[27px] text-[22px] text-white hover:bg-blue-500 lg:text-[20px]"
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
