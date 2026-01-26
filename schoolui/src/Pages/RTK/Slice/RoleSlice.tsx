import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addRoleApi,
  deleteRoleApi,
  editRoleApi,
  getRoleApi,
} from "../Services/RoleServices";

/* ================= TYPES ================= */

export interface Role {
  id: string | number;
  name: string;
}

interface RoleState {
  roles: Role[];
  loading: boolean;
  error: string | null;
}

const initialState: RoleState = {
  roles: [],
  loading: false,
  error: null,
};

/* ================= THUNKS ================= */

// GET
export const fetchRoles = createAsyncThunk<Role[]>(
  "roles/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getRoleApi();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch roles");
    }
  }
);

// ADD
export const addRoleThunk = createAsyncThunk<Role, { name: string }>(
  "roles/add",
  async (payload, { rejectWithValue }) => {
    try {
      return await addRoleApi(payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Add role failed");
    }
  }
);

// UPDATE
export const updateRoleThunk = createAsyncThunk<
  Role,
  { id: string | number; payload: { name: string } }
>("roles/update", async ({ id, payload }, { rejectWithValue }) => {
  try {
    return await editRoleApi(id, payload);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return rejectWithValue(err.response?.data || "Update failed");
  }
});

// DELETE
export const deleteRoleThunk = createAsyncThunk<
  string | number,
  string | number
>("roles/delete", async (id, { rejectWithValue }) => {
  try {
    await deleteRoleApi(id);
    return id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return rejectWithValue(err.response?.data || "Delete failed");
  }
});

/* ================= SLICE ================= */

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchRoles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoles.fulfilled, (state, action: PayloadAction<Role[]>) => {
        state.loading = false;
        state.roles = action.payload;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchRoles.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addRoleThunk.fulfilled, (state, action: PayloadAction<Role>) => {
        state.roles.push(action.payload);
      })

      // UPDATE
      .addCase(
        updateRoleThunk.fulfilled,
        (state, action: PayloadAction<Role>) => {
          const index = state.roles.findIndex(
            (r) => r.id === action.payload.id
          );
          if (index !== -1) {
            state.roles[index] = action.payload;
          }
        }
      )

      // DELETE
      .addCase(
        deleteRoleThunk.fulfilled,
        (state, action: PayloadAction<string | number>) => {
          state.roles = state.roles.filter(
            (r) => r.id !== action.payload
          );
        }
      );
  },
});

export default roleSlice.reducer;
