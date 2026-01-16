import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addUserApi, getUsersApi, AddUserPayload } from "../Services/UserServices";

// -------------------- Types --------------------
interface User {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isStaff: boolean;
    isActive: boolean;
    dateJoined?: string;
    lastLogin?: string | null;
  }
  

interface UserState {
  users: User[];
  loading: boolean; // For GET
  addLoading: boolean; // For POST
  addSuccess: boolean;
  error: string | null;
}

// -------------------- Initial State --------------------
const initialState: UserState = {
  users: [],
  loading: false,
  addLoading: false,
  addSuccess: false,
  error: null,
};

// -------------------- Async Thunks --------------------

// GET users
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

// POST add user
export const addUser = createAsyncThunk<
  void,
  AddUserPayload,
  { rejectValue: string }
>("user/addUser", async (payload, { rejectWithValue }) => {
  try {
    await addUserApi(payload);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || "Failed to add user");
    }
    return rejectWithValue("Failed to add user");
  }
});

// -------------------- Slice --------------------
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
    // Fetch Users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Add User
    builder
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

// -------------------- Exports --------------------
export const { resetAddUserState } = userSlice.actions;
export default userSlice.reducer;
