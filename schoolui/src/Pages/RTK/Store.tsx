import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/loginUser";
import addUserReducer from "./Slice/AddUserSlice";
import usersReducer from "./Slice/AddUserSlice";

export const Store = configureStore({
  reducer: {
    auth: loginReducer,
    addUser: addUserReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
