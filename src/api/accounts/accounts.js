import { axiosApi } from "..";

// PARTICIPANTS
// implement create profile in form with form data
export const getParticipantProfile = async (participant_code) => {
  return await axiosApi.get(`/participants/${participant_code}`);
};
export const fetchParticipantProfile = async (user_ref) => {
  return await axiosApi.get(`/participants/${user_ref}/profile`);
};
// implement PATCH profile in form with form data
export const deleteParticipantProfile = async (participant_code) => {
  return await axiosApi.destroy(`/participants/${participant_code}`);
};

// ORGANIZERS
// implement create profile in form with form data
export const getOrganizerProfile = async (organizer_code) => {
  return await axiosApi.get(`/organizers/${organizer_code}`);
};
export const fetchOrganizerProfile = async (user_ref) => {
  return await axiosApi.get(`/organizers/${user_ref}/profile`);
};
// implement PATCH profile in form with form data
export const deleterOganizerProfile = async (organizer_code) => {
  return await axiosApi.destroy(`/participants/${organizer_code}`);
};
