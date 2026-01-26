import baseApi from "../API/baseUrl";
import { API_URLS } from "../API/apiUrl";

export interface AddRolePayload {
name : string,
}

// Add user
export const addRoleApi = async (payload: AddRolePayload) => {
  const { data } = await baseApi.post(API_URLS.ROLE.ADD, payload);
  return data;
};

// Get users
export const getRoleApi = async () => {
  const { data } = await baseApi.get(API_URLS.ROLE.GET);
  return data;
};

export const editRoleApi = async (id: string | number,payload: Partial<AddRolePayload>) => {
  const { data } = await baseApi.patch(
    API_URLS.ROLE.UPDATE(id),
    payload
  );
  return data;
};

// DELETE USER
export const deleteRoleApi = async (id: string | number) => {
  const { data } = await baseApi.delete(
    API_URLS.ROLE.DELETE(id)
  );
  return data;
};
