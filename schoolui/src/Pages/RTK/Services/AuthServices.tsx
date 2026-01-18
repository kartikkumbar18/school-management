import baseApi from "../API/baseUrl";
import { API_URLS } from "../API/apiUrl";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  username: string;
}

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await baseApi.post(API_URLS.AUTH.LOGIN, payload);
  return data; // { access_token, username }
};
