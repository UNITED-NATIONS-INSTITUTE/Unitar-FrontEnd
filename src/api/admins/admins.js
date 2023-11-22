import { axiosApi } from "..";

export const getAllUsers = async () => {
  return await axiosApi.get("/users/");
};
export const getParticipants = async () => {
  return await axiosApi.get("/participants/");
};

export const getOrganizers = async () => {
  return await axiosApi.get("/organizers/");
};
// Destroy, statistics, etc....
