import React from "react";
import AdminProfile from "../AdminLogOut";
import { useSelector } from "react-redux";
import { selectCurrentSubscriptionDetail } from "../../../features/subscription/subscriptionSlice";

const ViewSubmissions = () => {
  const submissionDetails = useSelector(selectCurrentSubscriptionDetail)

  return (
    <div className="bg-white right-side min-h-screen min-w-full">
      <div className="ml-[280px]">
        <div className="flex justify-between mt-8">
          <h1 className="text-gray-600 font-bold text-[24px]">
            Submitted Hackathons
          </h1>
          <div className="mr-10">
            <AdminProfile />
          </div>
        </div>
        <div className="flex flex-wrap  space-x-4 mt-5 ml-4">
          {submissionDetails && (
            <div
              key={submissionDetails.id}
              className="flex gap-[100px] rounded-[6px] shadow flex-row border border-gray-100  mb-4  h-full w-full"
            >
              <div className="flex-shrink-0 rounded-full mt-3 ml-3 mb-3">
                <img
                  src={submissionDetails.hackathon.cover_image_url}
                  alt=""
                  style={{
                    borderRadius: "20px",
                    width: "460px",
                    height: "370px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="ml-4 mt-5">
                <p className="mt-3 ">
                  Blog:{" "}
                  <span className="text-sm text-black ml-3">
                    {" "}
                    {submissionDetails.blog}
                  </span>
                </p>
                <p className="mt-3 ">
                  Demo Link:
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.demo_link}
                  </span>
                </p>
                <p className="mt-3 ">
                  Description:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.desc}
                  </span>
                </p>

                <p className="mt-3">
                  Live URL:
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.live_url}
                  </span>
                </p>
                <p className="mt-3 ">
                  Description:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.desc}
                  </span>
                </p>
                <p className="mt-3 ">
                  Grade:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.grade}
                  </span>
                </p>
                <p className="mt-3 ">
                  GitHub Link:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.gh_link}
                  </span>
                </p>
                <p className="mt-3">
                  Prize:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.hackathon.prize}
                  </span>
                </p>
                <p className="mt-3 ">
                  Status:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.hackathon.status}
                  </span>
                </p>
                <p className="mt-3 ">
                  Location:{" "}
                  <span className="text-sm text-black ml-3">
                    {submissionDetails.hackathon.location}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSubmissions;
