// Services/UserServices.ts
import baseApi from "../API/baseUrl";
import { API_URLS } from "../API/apiUrl";

export interface AddUserPayload {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isStaff: boolean;
}

export const addUserApi = async (payload: AddUserPayload) => {
  const { data } = await baseApi.post(API_URLS.USER.ADD, payload);
  return data;
};

export const getUsersApi = async () => {
    const { data } = await baseApi.get(API_URLS.USER.ADD);
    return data;
  };