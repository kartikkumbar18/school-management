import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addRoleApi,
  deleteRoleApi,
  editRoleApi,
  getRoleApi,
} from "../Services/RoleMappingServices";

/* ================= TYPES ================= */

export interface RoleMapping {
    id: number;
    username: string;
    groups: {
      id: number;
      name: string;
    }[];
  }
  

interface RoleMappingState {
  mappings: RoleMapping[];
  loading: boolean;
  error: string | null;
}

const initialState: RoleMappingState = {
  mappings: [],
  loading: false,
  error: null,
};

export interface Role {
    id: string | number;
    name: string;
  }

/* ================= THUNKS ================= */

// GET
export const fetchRoleMappings = createAsyncThunk(
  "roleMapping/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getRoleApi();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Fetch failed");
    }
  }
);

// ADD
export const addRoleMappingThunk = createAsyncThunk(
  "roleMapping/add",
  async (
    payload: { user_id: number; group_ids: number[] },
    { rejectWithValue }
  ) => {
    try {
      return await addRoleApi(payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Add failed");
    }
  }
);

// UPDATE
export const updateRoleMappingThunk = createAsyncThunk(
  "roleMapping/update",
  async (
    {
      id,
      payload,
    }: {
      id: number;
      payload: { user_id: number; group_ids: number[] };
    },
    { rejectWithValue }
  ) => {
    try {
      return await editRoleApi(id, payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Update failed");
    }
  }
);

// DELETE
export const deleteRoleMappingThunk = createAsyncThunk(
  "roleMapping/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteRoleApi(id);
      return id;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  }
);

/* ================= SLICE ================= */

const roleMappingSlice = createSlice({
  name: "roleMapping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoleMappings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoleMappings.fulfilled, (state, action) => {
        state.loading = false;
        state.mappings = action.payload;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchRoleMappings.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addRoleMappingThunk.fulfilled, (state, action) => {
        state.mappings.push(action.payload);
      })
      .addCase(updateRoleMappingThunk.fulfilled, (state, action) => {
        const index = state.mappings.findIndex(
          (m) => m.id === action.payload.id
        );
        if (index !== -1) state.mappings[index] = action.payload;
      })
      .addCase(deleteRoleMappingThunk.fulfilled, (state, action) => {
        state.mappings = state.mappings.filter(
          (m) => m.id !== action.payload
        );
      });
  },
});

export default roleMappingSlice.reducer;
