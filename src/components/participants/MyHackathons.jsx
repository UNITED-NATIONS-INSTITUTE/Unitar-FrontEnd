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
    <div className="bg-white right-side min-h-screen min-w-full">
      <div className="ml-[280px]">
        <div className="flex justify-between mt-8">
          <h1 className="text-gray-600 font-bold text-[24px]">My Hackathons</h1>
          <div className="mr-10">
            <UserProfile />
          </div>
        </div>
        <div className="flex flex-wrap space-x-4 mt-5 ml-4">
          {subscriptionsPayload.length > 0 &&
            subscriptionsPayload.map((field, index) => (
              <div
                key={index}
                className="flex rounded-[6px] shadow-xl flex-col border border-gray-100  mb-4 w-[300px] h-[400px] transition-transform transform hover:-translate-y-1"
              >
                <img
                  className="rounded-md w-[300px] h-[200px]"
                  key={index}
                  src={field.hackathon.cover_image_url}
                  alt={`image ${index + 1}`}
                />
                <p className="mt-2 text-sm ml-4 text-gray-500">
                  {field.hackathon.name}
                </p>
                <p className="mt-2 text-sm ml-4 font-bold">
                  {field.hackathon.highlight}
                </p>
                <p className="mt-2 text-[12px] ml-4 w-[200px]  text-gray-500">
                  {field.hackathon.description}
                </p>

                <div className="flex mt-auto">
                  <button
                    onClick={() => handleViewClick(field)}
                    className="border ml-[22px] mb-5 border-blue-500 rounded-md text-blue-500 hover:bg-custom-blue hover:text-white w-[250px] text-xs mt-4 py-1"
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
