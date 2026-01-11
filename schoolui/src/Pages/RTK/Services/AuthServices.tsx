import { API_URLS } from "../API/apiUrl";
import baseApi from "../API/baseUrl";



interface LoginPayload {
  email: string;
  password: string;
}

export const loginApi = async (payload: LoginPayload) => {
  const response = await baseApi.post(
    API_URLS.AUTH.LOGIN,
    payload
  );
  return response.data;
};
