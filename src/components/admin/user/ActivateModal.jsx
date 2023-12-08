import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

export default function ActivateModal({ openModal, closeModal }) {
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
                    Activate User
                  </h1>

                  <p className="mt-12 items-center text-gray-700 text-[20px] ">
                    Do you really want to activate this user?
                  </p>
                  <div className="flex flex-row gap-5 mt-10">
                    <button className="bg-custom-blue text-white font-bold w-[200px] py-2 px-2 rounded-md  hover:bg-blue-500">
                      YES, ACTIVATE
                    </button>
                    <button
                      onClick={closeModal}
                      className="border text-custom-blue border-custom-blue rounded-md w-[200px] py-2 px-2  hover:border-blue-500 "
                    >
                      NO, CANCEL
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
