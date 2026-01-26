import baseApi from "../API/baseUrl";
import { API_URLS } from "../API/apiUrl";

export interface AddRolePayload {
    user_id:number,
    group_ids:number[],
}

// Add user
export const addRoleApi = async (payload: AddRolePayload) => {
  const { data } = await baseApi.post(API_URLS.ROLE_MAPPING.ADD, payload);
  return data;
};

// Get users
export const getRoleApi = async () => {
  const { data } = await baseApi.get(API_URLS.ROLE_MAPPING.GET);
  return data;
};

export const editRoleApi = async (id: string | number,payload: Partial<AddRolePayload>) => {
  const { data } = await baseApi.put(
    API_URLS.ROLE_MAPPING.UPDATE(id),
    payload
  );
  return data;
};

// DELETE USER
export const deleteRoleApi = async (id: string | number) => {
  const { data } = await baseApi.delete(
    API_URLS.ROLE_MAPPING.DELETE(id)
  );
  return data;
};
