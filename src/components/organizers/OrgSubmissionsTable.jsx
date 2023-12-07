import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import ViewDetailsPage from "./ViewDetailsPage";
import GradingModal from "./GradingModal";
import { getHackathonSubscriptions } from "../../api/hackathons/hackathons";
import { setCurrentSubscriptionDetail } from "../../features/subscription/subscriptionSlice";
const OrgSubmissionsTable = ({ hackathonId }) => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const openModal = () => setOpenSignUpModal(true);
  const closeModal = () => setOpenSignUpModal(false);
  const dispatch = useDispatch();
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [subscriptionsData, setSubscriptionsData] = useState([]);
  const fetchHackathons = () => {
    getHackathonSubscriptions(hackathonId)
      .then((res) => {
        if (res.status === 200) {
          setSubscriptionsData(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchHackathons();
  }, []);
  const showDetails = (params) => {
    setDetailsVisible(true);
    dispatch(
      setCurrentSubscriptionDetail({ currentSubscriptionDetail: params.row })
    );
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
      block: "start",
    });
  };
  const customBorder = {
    border: "none",
    borderBottom: "1px solid #0e0e0e",
  };
  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 100,
    },
    { field: "blog", headerName: "Blog", width: 115 },
    { field: "title", headerName: "Project name", width: 155 },
    { field: "gh_link", headerName: "Github", width: 155 },
    { field: "demo_link", headerName: "Demo link", width: 155 },
    { field: "live_url", headerName: "Live link", width: 155 },
    {
      field: "action",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <button
          onClick={() => showDetails(params)}
          className="bg-custom-blue text-white rounded-md text-xs font-semibold px-3 py-2 hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue"
        >
          View details
        </button>
      ),
    },
  ];

  return (
    <div className=" flex flex-col min-w-full ">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={customBorder}
          rows={subscriptionsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      <div className={detailsVisible ? "block" : "hidden"}>
        {" "}
        <ViewDetailsPage openModal={openModal} />{" "}
        <GradingModal openModal={openSignUpModal} handleClose={closeModal} />
      </div>
    </div>
  );
};

export default OrgSubmissionsTable;
