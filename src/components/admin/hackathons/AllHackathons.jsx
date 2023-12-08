import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const AllHackathons = () => {
  const navigate = useNavigate();
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "hackathon",
      headerName: "Hackathons",
      width: 160,
    },
    { field: "organization", headerName: "Organization", width: 160 },
    { field: "prizes", headerName: "Prizes", width: 160 },
    { field: "participants", headerName: "No of participants", width: 160 },
    { field: "status", headerName: "Status", width: 160 },

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
            <MenuItem onClick={() => navigate("/admin/hackathons/view")}>
              View Hackathon
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/hackathons/activate")}>
              Activate Hackathon
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/hackathons/deactivate")}>
              Deactivate Hackathon
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/hackathons/delete")}>
              Delete Hackathon
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
        <h1 className="text-[24px] font-bold text-gray-600">All Hackathons</h1>

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

export default AllHackathons;
