import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { crudSlice } from './crudSlice';
import { profileSlice } from './profileSlice'
export const store = configureStore({
    reducer: {
        authKey: authSlice.reducer,
        crudKey: crudSlice.reducer,
        profileKey: profileSlice.reducer,
    }
})