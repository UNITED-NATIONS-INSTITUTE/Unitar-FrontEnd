import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

import AdminLogOut from "../AdminLogOut";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import DeleteChipModal from "./DeleteChipModal";

export default function Chips() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleClick = () => {
    alert("You clicked the Chip.");
  };

  const handleDelete = () => {
    setModalOpen(true);
  };

  return (
    <div className="bg-white p-8 right-side min-h-screen min-w-full ">
      <div className="ml-60">
        <div className="flex justify-end">
          <AdminLogOut />
        </div>
        <h1 className="text-[24px] font-bold text-gray-600">Tags Actions</h1>
        <button
          onClick={() => navigate("/admin/tags/createtag")}
          className="bg-custom-blue w-[150px] rounded-md py-3 px-2 text-white font-semibold mt-5 hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:border mb-4"
        >
          Create a Tag
        </button>
        <div className="w-[600px] h-[500px] rounded-lg shadow-md  items-center border border-gray-100">
          <h1 className=" text-[28px] text-custom-blue text-center font-bold mt-6">
            Here are all the available tags
          </h1>
          <div className=" flex items-center justify-center mt-8">
            <Stack direction="row" spacing={1}>
              <Chip
                label="Utamaduni"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                className="bg-black"
                label="Ukulima"
                variant="outlined"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                label="Finance"
                variant="outlined"
                onClick={handleClick}
                onDelete={handleDelete}
              />
              <Chip
                label=" Technology"
                variant="outlined"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Stack>
          </div>
        </div>
      </div>
      <DeleteChipModal
        openModal={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
}
