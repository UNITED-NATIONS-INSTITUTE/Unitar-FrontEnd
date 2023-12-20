import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSubscriptionDetail } from "../../features/subscription/subscriptionSlice";
const ViewDetailsPage = ({ openModal }) => {
  const subscription = useSelector(selectCurrentSubscriptionDetail);
  return (
    <div>
      {subscription && (
        <div className="flex gap-[80px] mt-10">
          <img
            src={
              subscription.image
                ? subscription.image
                : "/assets/no image (1).jpg"
            }
            alt=""
            className="w-[400px] rounded-[10px] h-[350px]"
          />
          <div>
            <p className="font-semibold ">{subscription.title}</p>
            <p className="mt-6 text-xs w-[400px]">{subscription.desc}</p>{" "}
            <div className="flex flex-row gap-[100px] mt-10">
              <div className="flex flex-col ">
                <p className="text-xs font-bold ">Demo Presentation Link</p>
                <p className="text-xs mt-2 text-[#6E7079]">
                  {subscription.demo_link}
                </p>
              </div>
              <div className="flex flex-col  ">
                <p className="text-xs font-bold">Blog Link(optional)</p>
                <p className="text-xs text-[#6E7079]  mt-2">
                  {subscription.blog}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[100px] mt-5">
              <div className="flex flex-col ">
                <p className="text-xs font-bold">Live Link</p>
                <p className="text-xs text-[#6E7079]  mt-2 ">
                  {subscription.live_url}
                </p>
              </div>
              <div className="flex flex-col  ">
                <p className="text-xs font-bold">Github Link</p>
                <p className="text-xs text-[#6E7079]  mt-2 ">
                  {subscription.gh_link}
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-6 ">
              <p className="text-xs font-bold">Submitted by</p>
              <p className="text-xs text-[#6E7079]  mt-2 ">
                {" "}
                {subscription.participant.first_name}{" "}
                {subscription.participant.last_name}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-custom-blue rounded-md w-[100px] text-white text-xs px-3 py-2 hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue"
                onClick={() => openModal()}
              >
                Grade Hackathon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetailsPage;
