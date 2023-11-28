import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { overlay } from "../../assets";

const OrgSubmissionsTable = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  const customStyles = {
    fontFamily: "Lexend, sans-serif",
    marginTop: "",
    fontSize: "20px",
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

  const navigate = useNavigate();
  const [choice, setChoice] = useState("");

  const handleChoice = (selectedChoice) => {
    setChoice(selectedChoice);
    if (selectedChoice === "ORGANIZER") {
      navigate("/org-signup"); //navigate to org sign in
    } else if (selectedChoice === "PARTICIPANT") {
      navigate("/part-signup"); //navigate to participant sign in
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "profileImage",
      headerName: "",
      width: 20,
      renderCell: () => (
        <img
          src="/assets/avatar1.jpg"
          alt="profile"
          style={{ borderRadius: "50%", width: "32px", height: "32px" }}
        />
      ),
    },
    { field: "participant", headerName: "Participant", width: 120 },
    { field: "projectName", headerName: "Project name", width: 165 },
    { field: "github", headerName: "Github", width: 165 },
    { field: "presentationLink", headerName: "Presentation link", width: 165 },
    { field: "liveLink", headerName: "Live link", width: 165 },
    {
      field: "action",
      headerName: "Action",
      width: 110,
      renderCell: () => (
        <button
          onClick={handleOpen}
          className="bg-custom-blue text-white rounded-md text-xs font-semibold px-3 py-2"
        >
          View details
        </button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      profileImage: "URL_TO_PARTICIPANT_IMAGE",
      participant: "Dennis Kim",
      projectName: "Hackathon project",
      github: "http://www.github.com",
      presentationLink: "http://www.netlify.com",
      liveLink: "http://www.netlify.com",
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={customBorder}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" overlay">
          <Box className=" flex items-center justify-center">
            <Box>
              <Typography variant="h6" component="h2" sx={customStyles}>
                Project Details{" "}
              </Typography>
              <Box className="">
                <div className="flex items-center gap-10 relative bottom-8">
                  <img
                    src={overlay}
                    className="w-[400px] rounded-[10px] h-[350px]"
                  />
                  <div>
                    <p className="font-semibold ">Project Title</p>
                    <h3 className="font-semibold mt-6">Hackathon Platform</h3>
                    <p className="mt-6">Project Description</p>
                    <p className="mt-6 text-xs">
                      Lorem ipsum dolor sit amet consectetur. Neque leo cursus
                      nunc et luctus eu. Pellentesque velit iaculis lectus
                      suspendisse nec neque. Mauris pharetra dui at enim morbi
                      nisl rhoncus orci eu. Quis praesent morbi{" "}
                    </p>{" "}
                    <div className="flex flex-row gap-10 mt-10">
                      <div className="flex flex-col ">
                        <p className="text-xs font-bold ">
                          Demo Presentation Link
                        </p>
                        <p className="text-xs mt-2 text-[#6E7079]">
                          {" "}
                          https://dsaproject.....
                        </p>
                      </div>
                      <div className="flex flex-col  ">
                        <p className="text-xs font-bold">Blog Link(optional)</p>
                        <p className="text-xs text-[#6E7079]  mt-2">
                          {" "}
                          https://dsaproject.....
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[55px] mt-5">
                      <div className="flex flex-col ">
                        <p className="text-xs font-bold">Live Link</p>
                        <p className="text-xs text-[#6E7079]  mt-2 ">
                          {" "}
                          https://dsaproject.....
                        </p>
                      </div>
                      <div className="flex flex-col  ">
                        <p className="text-xs font-bold">Github Link</p>
                        <p className="text-xs text-[#6E7079]  mt-2 ">
                          {" "}
                          https://dsaproject.....
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 ">
                      <p className="text-xs font-bold">Submitted by</p>
                      <p className="text-xs text-[#6E7079]  mt-2 ">
                        {" "}
                        Denis Kim
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default OrgSubmissionsTable;
