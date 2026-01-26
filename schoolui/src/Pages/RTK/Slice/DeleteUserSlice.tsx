import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteUserApi } from "../Services/UserServices";

interface DeleteUserState {
  loading: boolean;
  error: string | null;
}

const initialState: DeleteUserState = {
  loading: false,
  error: null,
};

export const deleteUserThunk = createAsyncThunk<
  string | number,
  string | number,
  { rejectValue: string }
>("deleteUser/delete", async (id, { rejectWithValue }) => {
  try {
    await deleteUserApi(id);
    return id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return rejectWithValue(err.response?.data || "Delete failed");
  }
});

const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Delete failed";
      });
  },
});

export default deleteUserSlice.reducer;
