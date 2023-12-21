import React, { useState, useEffect } from "react";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../../api/admins/admins";
import { Chip } from "@mui/material";
import CustomDataGrid from "../../common/utils/CustomDataGrid";
import AdminLogOut from "../AdminLogOut";
import { LinearProgress } from "@mui/material";
import ActivateModal from "./ActivateModal";
import DeactivateModal from "./DeactivateModal";
import DeleteModal from "./DeleteModal";
const UsersTable = () => {
  const [loading, setLoading] = useState(true);
  const [openActivateModal, setOpenActivateModal] = useState(false);
  const [openDeactivateModal, setOpenDeactivateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const navigate = useNavigate();
  const [usersPayload, setUsersPayload] = useState([]);
  const [userCode, setUserCode] = useState("")
  const fetchUsers = () => {
    getAllUsers().then((res) => {
      if (res.status === 200) {
        setUsersPayload(res.data);
        setLoading(false);
      }
    });
  };
  const handleActionClick = (params) => {
    setUserCode(params.row.id)
    console.log(params.row.id)

  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "ACTIVE":
        return "rgba(0, 128, 0, 0.80)";
      case "PENDING":
        return "rgba(255, 165, 0, 0.80)";
      case "DEACTIVATED":
        return "rgba(255, 0, 0, 0.80)";
      default:
        return "rgba(169, 169, 169, 0.5)";
    }
  };
  const columns = [
    {
      field: "username",
      headerName: "Username",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <Chip
          label={params.value}
          style={{
            backgroundColor: getStatusColor(params.value),
            color: "white",
          }}
        />
      ),
    },

    {
      field: "action",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <Dropdown>
          <MenuButton
            onClick={() => handleActionClick(params)}
            slots={{ root: IconButton }}
            slotProps={{ root: { variant: "outlined", color: "neutral" } }}
          >
            <MoreVert />
          </MenuButton>
          <Menu>
            <MenuItem onClick={() => setOpenActivateModal(true)}>
              Activate user
            </MenuItem>
            <MenuItem onClick={() => setOpenDeactivateModal(true)}>
              Deactivate user
            </MenuItem>
            <MenuItem onClick={() => setOpenDeleteModal(true)}>
              Delete user
            </MenuItem>
          </Menu>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-white p-8 right-side min-h-screen min-w-full ">
      <div className="ml-60">
        <div className="flex justify-end">
          <AdminLogOut />
        </div>
        <h1 className="text-[24px] font-bold text-gray-600">Users Actions</h1>
        <button
          onClick={() => navigate("/admin/users/create")}
          className="bg-custom-blue w-[150px] rounded-md py-3 px-2 text-white font-semibold mt-5 hover:bg-white hover:text-custom-blue hover:border-custom-blue hover:border mb-4"
        >
          Create User
        </button>
        <ActivateModal
          openModal={openActivateModal}
          closeModal={() => setOpenActivateModal(false)}
          user_id={userCode}
        />
        <DeactivateModal
          openModal={openDeactivateModal}
          closeModal={() => setOpenDeactivateModal(false)}
          user_id={userCode}
        />
        <DeleteModal
          openModal={openDeleteModal}
          closeModal={() => setOpenDeleteModal(false)}
          user_id={userCode}
        />
        {loading && <LinearProgress />}
        {!loading && (
          <div className="flex-grow">
            <CustomDataGrid
              sx={{ mt: 3 }}
              rows={usersPayload}
              columns={columns}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersTable;
