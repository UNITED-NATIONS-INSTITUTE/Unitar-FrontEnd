import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { getParticipants } from "../../../api/admins/admins";
import CustomDataGrid from "../../common/utils/CustomDataGrid";
const AllParticipants = () => {
  const navigate = useNavigate();
  const [participantsPayload, setParticipantsPayload] = useState([]);
  const fetchParticipants = () => {
    getParticipants().then((res) => {
      if (res.status === 200) {
        setParticipantsPayload(res.data);
      }
    });
  };

  useEffect(() => {
    fetchParticipants();
  }, []);
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "first_name",
      headerName: "First Name",
      width: 150,
    },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "residence", headerName: "Country", width: 160 },
    { field: "gender", headerName: "Gender", width: 160 },
    { field: "date_of_birth", headerName: "DOB", width: 160 },
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
            <MenuItem onClick={() => navigate("/admin/participants/detail")}>
              View participant
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/participants/edit")}>
              Edit participant
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/participants/delete")}>
              Delete participant
            </MenuItem>
          </Menu>
        </Dropdown>
      ),
    },
  ];
  const getCellClassName = (params) => {
    return `small-text-cell ${params.field}`;
  };
  return (
    <div className="bg-white p-8 right-side min-h-screen h-full flex ">
      <div className="ml-60">
        <h1 className="text-[24px] font-bold text-gray-600">
          All Participants
        </h1>
        <div className="flex-grow">
          <CustomDataGrid
            sx={{ mt: 3 }}
            rows={participantsPayload}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
};

export default AllParticipants;
