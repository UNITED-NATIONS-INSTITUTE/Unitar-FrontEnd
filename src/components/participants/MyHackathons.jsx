import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserProfile from "./profile/UserProfile";
import { getParticipantHackathonSubscriptions } from "../../api/hackathons/hackathons";
import { selectCurrentParticipantDetail } from "../../features/participant/participantSlice";
import { setCurrentSubscriptionDetail } from "../../features/subscription/subscriptionSlice";
const MyHackathons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const participantDetails = useSelector(selectCurrentParticipantDetail);
  const [subscriptionsPayload, setSubscriptionsPayload] = useState([]);

  const fetchSubscriptions = () => {
    getParticipantHackathonSubscriptions(participantDetails.id)
      .then((res) => {
        if (res.status === 200) {
          setSubscriptionsPayload(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSubscriptions();
  }, []);
  const handleViewClick = (subscriptionDetails) => {
    dispatch(
      setCurrentSubscriptionDetail({
        currentSubscriptionDetail: subscriptionDetails,
      })
    );
    navigate("/participant/hackathons/submit");
  };
  return (
    <div className="bg-white right-side min-h-screen min-w-full  ">
      <div className=" ml-[280px]">
        <div className="flex justify-between mt-8">
          <h1 className="text-gray-600 font-bold text-[24px]">My Hackathons</h1>
          <div className="mr-10 ">
            <UserProfile />{" "}
          </div>
        </div>
        <div className="flex flex-wrap space-x-4 mt-5 ml-4">
          {subscriptionsPayload.length > 0 &&
            subscriptionsPayload.map((field, index) => (
              <div
                key={index}
                className="flex rounded-[6px] shadow-lg flex-col border border-gray-300   items-center mb-4 w-[400px] h-[350px]"
              >
                <img
                  className="rounded-md w-[280px] h-[200px] mt-4"
                  key={index}
                  src={field.hackathon.cover_image_url}
                  alt={`image ${index + 1}`}
                />
                <p className="mt-2 text-sm text-gray-500">
                  {field.hackathon.name}
                </p>
                <p className="mt-2 text-sm  font-bold">
                  {field.hackathon.highlight}
                </p>
                <p className="mt-2 text-[12px] w-[200px] text-center text-gray-500">
                  {field.hackathon.description}
                </p>

                <div className="flex gap-5">
                  <button
                    onClick={() => handleViewClick(field)}
                    className="border mb-5 border-blue-500 rounded-md text-blue-500 w-[150px] text-xs mt-4 py-1"
                  >
                    Make a Submission
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyHackathons;
