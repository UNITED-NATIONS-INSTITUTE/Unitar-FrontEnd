import React, { useState, useEffect } from "react";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { getOrganizers } from "../../../api/admins/admins";
import CustomDataGrid from "../../common/utils/CustomDataGrid";
import AdminProfile from "../AdminProfile";
const AllOrganizers = () => {
  const navigate = useNavigate();

  const [organizersPayload, setOrganizersPayload] = useState([]);
  const fetchOrganizers = () => {
    getOrganizers().then((res) => {
      if (res.status === 200) {
        setOrganizersPayload(res.data);
      }
    });
  };

  useEffect(() => {
    fetchOrganizers();
  }, []);
  const columns = [
    {
      field: "name",
      headerName: "Organization",
      width: 300,
    },
    { field: "industry", headerName: "Industry", width: 300 },
    { field: "location", headerName: "Location", width: 200 },
    {
      field: "action",
      headerName: "Actions",
      width: 80,
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

  return (
    <div className="bg-white p-8 right-side min-h-screen h-full flex  ">
      <div className="ml-60">
        <div className="flex justify-end">
          <AdminProfile />
        </div>
        <h1 className="text-[24px] font-bold text-gray-600">All Organizers</h1>

        <div className="flex-grow">
          <CustomDataGrid
            sx={{ mt: 3 }}
            rows={organizersPayload}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default AllOrganizers;
