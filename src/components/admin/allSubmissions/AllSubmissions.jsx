import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { getSubmissions } from "../../../api/admins/admins";
const AllSubmissions = () => {
  const navigate = useNavigate();
  const [submissionsPayload, setSubmissionsPayload] = useState([]);
  const fetchSubmissions = () => {
    getSubmissions().then((res) => {
      if (res.status === 200) {
        setSubmissionsPayload(res.data);
      }
    });
  };
  useEffect(() => {
    fetchSubmissions();
  }, []);
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "Hackathon",
      headerName: "Submissions",
      width: 250,
    },
    { field: "last_name", headerName: "Participant", width: 250 },
    { field: "title", headerName: "Organization", width: 320 },
    {
      field: "action",
      headerName: "Actions",
      width: 90,
      renderCell: () => (
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: "outlined", color: "neutral" } }}
          >
            <MoreVert />
          </MenuButton>
          <Menu>
            <MenuItem onClick={() => navigate("/admin/submissions/view")}>
              View Submission
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/submissions/edit")}>
              Edit Submission
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/submissions/delete")}>
              Delete Submission
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
    <div className="bg-white p-8 right-side min-h-screen min-w-full ">
      <div className="ml-60">
        <h1 className="text-[24px] font-bold text-gray-600">All Submissions</h1>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={customBorder}
            getCellClassName={getCellClassName}
            rows={submissionsPayload}
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

export default AllSubmissions;
