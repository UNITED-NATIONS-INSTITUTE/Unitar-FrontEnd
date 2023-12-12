import { axiosApi } from "..";

export const getAllUsers = async () => {
  return await axiosApi.get("/admins/users/");
};

export const adminCreateUser = async (
  role,
  username,
  password,
  password_confirmation
) => {
  return await axiosApi.post("/admins/users", {
    role,
    username,
    password,
    password_confirmation,
  });
};
export const activateUserAccount = async (user_code) => {
  return await axiosApi.get(`admins/users/activate/${user_code}`);
};
export const getParticipants = async () => {
  return await axiosApi.get("/admins/participants/");
};

export const getOrganizers = async () => {
  return await axiosApi.get("/admins/organizers/");
};

export const getSubmissions = async () => {
  return await axiosApi.get("/subscriptions");
};

export const getPlatformStats = async () => {
  return await axiosApi.get("/platform/statistics");
};
// Destroy, statistics, etc....
