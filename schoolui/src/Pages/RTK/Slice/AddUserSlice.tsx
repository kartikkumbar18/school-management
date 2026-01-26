import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUserApi, getUsersApi, AddUserPayload } from "../Services/UserServices";
import axios from "axios";

/* ================= USER MODEL ================= */
export interface User {
  id: number | string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
}

/* ================= STATE ================= */
interface UserState {
  users: User[];
  loading: boolean;
  addLoading: boolean;
  addSuccess: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  addLoading: false,
  addSuccess: false,
  error: null,
};

/* ================= FETCH USERS ================= */
export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsersApi();
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch users"
        );
      }
      return rejectWithValue("Failed to fetch users");
    }
  }
);

/* ================= ADD USER ================= */
export const addUser = createAsyncThunk<
  void,
  AddUserPayload,
  { rejectValue: string }
>(
  "user/addUser",
  async (payload, { rejectWithValue }) => {
    try {
      await addUserApi(payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to add user"
        );
      }
      return rejectWithValue("Failed to add user");
    }
  }
);

/* ================= SLICE ================= */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetAddUserState: (state) => {
      state.addSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch users";
      })

      // Add user
      .addCase(addUser.pending, (state) => {
        state.addLoading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state) => {
        state.addLoading = false;
        state.addSuccess = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.addLoading = false;
        state.error = action.payload ?? "Failed to add user";
      });
  },
});

export const { resetAddUserState } = userSlice.actions;
export default userSlice.reducer;
