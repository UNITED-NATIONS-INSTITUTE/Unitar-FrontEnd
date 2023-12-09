import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { getAllHackathons } from "../../../api/hackathons/hackathons";
const AllHackathons = () => {
  const navigate = useNavigate();
  const [hackathonsPayload, setHackathonsPayload] = useState([]);
  const fetchHackathons = () => {
    getAllHackathons().then((res) => {
      if (res.status === 200) {
        setHackathonsPayload(res.data);
      }
    });
  };
  useEffect(() => {
    fetchHackathons();
  }, []);
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    { field: "title", headerName: "Title", width: 160 },
    { field: "location", headerName: "Location", width: 160 },
    { field: "highlight", headerName: "Highlight", width: 160 },
    { field: "prize", headerName: "Prizes", width: 160 },
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
            rows={hackathonsPayload}
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
