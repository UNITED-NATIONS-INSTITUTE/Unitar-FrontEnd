import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";

const AllParticipants = () => {
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "first_name",
      headerName: "First Name",
      width: 100,
    },
    { field: "last_name", headerName: "Last Name", width: 115 },
    { field: "title", headerName: "Project name", width: 155 },
    { field: "gh_link", headerName: "Github", width: 155 },
    { field: "demo_link", headerName: "Demo link", width: 155 },
    { field: "live_url", headerName: "Live link", width: 155 },
    {
      field: "action",
      headerName: "Actions",
      width: 110,
      renderCell: () => (
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: "outlined", color: "neutral" } }}
          >
            <MoreVert />
          </MenuButton>
          <Menu>
            <MenuItem>Activate</MenuItem>
            <MenuItem>Deactivate</MenuItem>
            <MenuItem>Delete</MenuItem>
          </Menu>
        </Dropdown>
      ),
    },
  ];
  const rows = [{ id: 7, action: "" }];

  return (
    <div className="bg-white p-8 right-side min-h-screen min-w-full ">
      <div className="ml-60">
        <h1 className="text-[24px] font-bold text-gray-600">
          All Participants
        </h1>

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
      </div>
    </div>
  );
};

export default AllParticipants;
