import baseApi from "../API/baseUrl";

export interface AddUserPayload {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  is_staff?: boolean;
}

// Add user
export const addUserApi = async (payload: AddUserPayload) => {
  const { data } = await baseApi.post("/api/users/", payload);
  return data;
};

// Get users
export const getUsersApi = async () => {
  const { data } = await baseApi.get("/api/users/");
  return data;
};
