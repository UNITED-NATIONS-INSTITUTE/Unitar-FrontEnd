import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const OrgSubmissionsTable = () => {
  const columns = [
    { field: "participant", headerName: "Participant", width: 130 },
    { field: "projectname", headerName: "Project name", width: 200 },
    { field: "github", headerName: "Github", width: 200 },
    { field: "presentationlink", headerName: "Presentation link", width: 200 },
    { field: "livelink", headerName: "Live link", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: () => (
        <button className="bg-custom-blue text-white rounded-md text-xs font-semibold px-3 py-2">
          View details
        </button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      participant: "Dennis Kim",
      projectname: "Hackathon project",
      github: "http://www.github.com",
      presentationlink: "http://www.netlify.com",
      livelink: "http://www.netlify.com",
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
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
