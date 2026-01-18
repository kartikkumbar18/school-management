import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/loginUser";
import usersReducer from "./Slice/AddUserSlice";

export const Store = configureStore({
  reducer: {
    auth: loginReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
