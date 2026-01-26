import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/loginUser";
import usersReducer from "./Slice/AddUserSlice";
import updateUserReducer from "./Slice/UpdateUserSlice"
import deleteUserReducer from "./Slice/DeleteUserSlice"
import roleReducer from "./Slice/RoleSlice"
import roleMappingReducer from "./Slice/RoleMappingSlice"

export const Store = configureStore({
  reducer: {
    auth: loginReducer,
    users: usersReducer,
    updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
  roles: roleReducer,
  roleMapping: roleMappingReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
