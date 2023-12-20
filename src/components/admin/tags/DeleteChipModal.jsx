import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { deleteHackathonCategory } from "../../../api/hackathons/hackathons";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 280,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function DeleteChipModal({ openModal, closeModal, category }) {
  console.log(category);
  const handleDelete = () => {
    deleteHackathonCategory(category).then((res) => {
      if (res.status === 204) {
        alert("tag deleted!");
      } else {
        alert("errror deleting tag");
      }
    });
  };
  // to do: handle modal infomatics and navigate back
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
                  <h1 className="font-bold text-[20px]  font-Lexend-Exa  text-center">
                    Delete Hackathon Category
                  </h1>
                  <div className="flex justify-center ">
                    <img
                      src="/assets/bin.jpg"
                      alt=""
                      className="w-[80px] h-[80px]"
                    />
                  </div>

                  <p className="text-sm items-center text-gray-700  ">
                    Delete this Category?
                  </p>
                  <div className="flex flex-row gap-5 mt-6 justify-center">
                    <button
                      onClick={() => handleDelete()}
                      className="bg-[#D40C0C] text-white font-bold w-[150px] py-2 px-2 rounded-md "
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={closeModal}
                      className="py-2 border border-black rounded-md w-[150px]"
                    >
                      Cancel
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
