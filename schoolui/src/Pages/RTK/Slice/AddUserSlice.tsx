import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUserApi, getUsersApi, AddUserPayload } from "../Services/UserServices";
import axios from "axios";

interface User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
}

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

// Fetch users
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      return await getUsersApi();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch users");
      }
      return rejectWithValue("Failed to fetch users");
    }
  }
);

// Add user
export const addUser = createAsyncThunk<void, AddUserPayload, { rejectValue: string }>(
  "user/addUser",
  async (payload, { rejectWithValue }) => {
    try {
      await addUserApi(payload);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Failed to add user");
      }
      return rejectWithValue("Failed to add user");
    }
  }
);

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
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add User
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
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export const { resetAddUserState } = userSlice.actions;
export default userSlice.reducer;
