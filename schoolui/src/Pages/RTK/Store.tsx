import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./Slice/loginUser";


export const Store = configureStore({
    reducer : {
        counter: loginUser,
    }
});
export type AppDispatch = typeof Store.dispatch;

