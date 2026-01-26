import baseApi from "../API/baseUrl";
import { API_URLS } from "../API/apiUrl";

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
  const { data } = await baseApi.post(API_URLS.USER.ADD, payload);
  return data;
};

// Get users
export const getUsersApi = async () => {
  const { data } = await baseApi.get(API_URLS.USER.GET);
  return data;
};

export const editUserApi = async (id: string | number,payload: Partial<AddUserPayload>) => {
  const { data } = await baseApi.patch(
    API_URLS.USER.UPDATE(id),
    payload
  );
  return data;
};

// DELETE USER
export const deleteUserApi = async (id: string | number) => {
  const { data } = await baseApi.delete(
    API_URLS.USER.DELETE(id)
  );
  return data;
};
