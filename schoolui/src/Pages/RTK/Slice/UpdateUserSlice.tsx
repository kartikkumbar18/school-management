import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editUserApi } from "../Services/UserServices";


interface UpdateUserState {
  loading: boolean;
  error: string | null;
}

const initialState: UpdateUserState = {
  loading: false,
  error: null,
};

/* ================= UPDATE USER ================= */
export const updateUserThunk = createAsyncThunk(
  "updateUser/update",
  async (
    {
      id,
      payload,
    }: {
      id: string | number;
      payload: {
        username?: string;
        first_name: string;
        last_name: string;
        email: string;
        password?: string;
      };
    },
    { rejectWithValue }
  ) => {
    try {
      return await editUserApi(id, payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Update failed");
    }
  }
);

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.loading = false;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(updateUserThunk.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default updateUserSlice.reducer;
