import React, { useEffect, useState } from "react";
import AdminProfile from "../AdminProfile";
import { getSubmissions } from "../../../api/admins/admins";

const ViewSubmissions = () => {
  const [submission, setSubmission] = useState(null);
  const fetchSubmissions = () => {
    getSubmissions().then((res) => {
      if (res.status === 200) {
        setSubmission(res.data[0]);
        console.log(res.data);
      }
    });
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);
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
          {submission && (
            <div
              key={submission.id}
              className="flex gap-[100px] rounded-[6px] shadow flex-row border border-gray-100  mb-4  h-full w-full"
            >
              {/* Image on the right */}
              <div className="flex-shrink-0 rounded-full mt-3 ml-3 mb-3">
                <img
                  src={submission.hackathon.cover_image_url}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    border: "3px solid #089BD9",
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="ml-4 mt-5">
                <p className="mt-3 text-custom-blue">
                  Blog:{" "}
                  <span className="text-sm text-black ml-3">
                    {" "}
                    {submission.blog}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Demo Link:
                  <span className="text-sm text-black ml-3">
                    {submission.demo_link}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Description:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.desc}
                  </span>
                </p>

                <p className="mt-3 text-custom-blue">
                  Live URL:
                  <span className="text-sm text-black ml-3">
                    {submission.live_url}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Description:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.desc}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Grade:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.grade}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  GitHub Link:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.gh_link}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Prize:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.hackathon.prize}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Status:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.hackathon.status}
                  </span>
                </p>
                <p className="mt-3 text-custom-blue">
                  Location:{" "}
                  <span className="text-sm text-black ml-3">
                    {submission.hackathon.location}
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
