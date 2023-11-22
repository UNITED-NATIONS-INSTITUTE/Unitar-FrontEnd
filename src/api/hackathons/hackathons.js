import { axiosApi } from "..";

// HACKATHONS
//  I. Create Hackathon Categories
export const createTag = async (category, created_by) => {
  return await axiosApi.post("/tags/", {
    category,
    created_by,
  });
};
//  II. View Available Categries
export const getTags = async () => {
  return await axiosApi.get("/tags/");
};

// III. Create a hackathon on the platform
export const createHackathon = async (hackathonObject) => {
  return await axiosApi.post("/hackathons/", hackathonObject);
};

// IV. Modify hackathon with media-Implemet on form with formData
// V. Get hackathon Validation Code
export const requestValidationCode = async (hackathon_code, user_email) => {
  return await axiosApi.post(
    `/hackathons/${hackathon_code}}/send-validation/`,
    {
      user_email,
    }
  );
};
// VI. Validate to activate Hackathon
export const validateHackathon = async (hackathon_code, confirmation_code) => {
  return await axiosApi.patch(
    `/hackathons/${hackathon_code}/send-validation/`,
    {
      confirmation_code,
    }
  );
};
//  VII. Reacreate Hackathon
export const resubmitHackathon = async (hackathonObject, hackathon_code) => {
  return await axiosApi.put(`/hackathons/${hackathon_code}/`, hackathonObject);
};

// VIII. Get all Hackathons on platform
export const getAllHackathons = async () => {
  return await axiosApi.get("/hackathons/");
};
// IX. Get Organizer Hackathons on platform
export const getOrganizerHackathons = async (organizer_code) => {
  return await axiosApi.get(`/hackathons/${organizer_code}/organizer-lists`);
};
// X. Get individual  Hackathon Details
export const getHackathonDetails = async (hackathon_code) => {
  return await axiosApi.get(`"/hackathons/${hackathon_code}/`);
};
// XI. Enrol Participant to Hackathon
export const enrolToHackathon = async (hackathon_code, participant_code) => {
  return await axiosApi.post("/subscriptions/", {
    hackathon_code,
    participant_code,
  });
};
// XII. View all Hackathon Subscriptions
export const getHackathonEnrolments = async () => {
  return await axiosApi.get("/subscriptions/");
};
// XIII. View a Hackathon Subscription Detail
export const getHackathonSubscriptionDetail = async (subscription_code) => {
  return await axiosApi.get(`/subscriptions/${subscription_code}`);
};
// XIV. View a HackathonS' SubscriptionS
export const getHackathonSubscriptions = async (hackathon_code) => {
  return await axiosApi.get(`/subscriptions/${hackathon_code}/view`);
};
// XV. View a Participants' Hackathon SubscriptionS
export const getParticipantHackathonSubscriptions = async (
  participant_code
) => {
  return await axiosApi.get(`/subscriptions/${participant_code}/get`);
};
// XVI. Submit a Hackathon Response
export const submitHackathonResponse = async (
  subscription_code,
  user_payload
) => {
  return await axiosApi.patch(
    `/subscriptions/${subscription_code}/response`,
    user_payload
  );
};
// XVII. Evaluate a hackthon
export const evaluateHackathon = async (subscription_code, grade) => {
  return await axiosApi.patch(`/subscriptions/${subscription_code}/grade`, {
    grade,
  });
};
// XVIII. Delete A participant hackathon Entry
export const deleterHackathon = async (subscription_code) => {
  return await axiosApi.destroy(`/subscriptions/${subscription_code}`);
};
