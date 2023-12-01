import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const OrgSubmissionsTable = () => {
  const navigate = useNavigate();
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
          onClick={() => navigate("/organizer/submissions/details/view")}
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
    </div>
  );
};

export default OrgSubmissionsTable;
