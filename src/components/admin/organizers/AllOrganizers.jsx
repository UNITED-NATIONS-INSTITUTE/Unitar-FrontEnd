import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const AllOrganizers = () => {
  const navigate = useNavigate();
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "organization",
      headerName: "Organization",
      width: 130,
    },
    { field: "industry", headerName: "Industry", width: 130 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "email", headerName: "Email", width: 155 },
    { field: "status", headerName: "Status", width: 155 },
    {
      field: "submitted_projects",
      headerName: "Submitted Projects",
      width: 155,
    },
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
            <MenuItem onClick={() => navigate("/admin/organizers/view")}>
              View Hackathons
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/organizers/create")}>
              Create Hackathon
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/organizers/activate")}>
              Activate Organization
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/organizers/deactivate")}>
              Deactivate Organization
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/organizers/delete")}>
              Delete Organization
            </MenuItem>
          </Menu>
        </Dropdown>
      ),
    },
  ];
  const rows = [{ id: 7, action: "" }];

  return (
    <div className="bg-white p-8 right-side min-h-screen min-w-full ">
      <div className="ml-60">
        <h1 className="text-[24px] font-bold text-gray-600">All Organizers</h1>

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

export default AllOrganizers;
