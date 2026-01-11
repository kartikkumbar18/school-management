import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../Services/AuthServices";


/* -------------------- Types -------------------- */

interface Admin {
  id: number;
  name: string;
  email: string;
  token: string;
}

interface AuthState {
  user: Admin | null;
  isLoading: boolean;
  error: string | null;
}

/* -------------------- Initial State -------------------- */

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

/* -------------------- Async Thunk -------------------- */

export const loginUser = createAsyncThunk<
  Admin,
  { email: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  try {
    const data = await loginApi(payload);

    return {
      id: 1,
      name: "Kartik",
      email: payload.email,
      token: data.token,
    };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    return rejectWithValue(
      error?.response?.data?.error || "Login failed"
    );
  }
});

/* -------------------- Slice -------------------- */

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<Admin>) => {
          state.isLoading = false;
          state.user = action.payload;
          localStorage.setItem("token", action.payload.token);
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

/* -------------------- Exports -------------------- */

export const { logout } = authSlice.actions;
export default authSlice.reducer;
