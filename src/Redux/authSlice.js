import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from '../Api/axiosinstance';
import { endpoint } from "../Api/endpoint";

const initialState = {
    upload_status: 'loading',

    idRegistered: false,

    redirectHome: !!localStorage.getItem('token'),
    redirectLogin: null,
    isLogin: !!localStorage.getItem('token'),
    
    Userdetails: [],
}
// Sign Up Function //
export const signup = createAsyncThunk('/signup',
    async (formData) => {
        let res = await axiosInstance.post(endpoint.auth.signup, formData);
        let resData = res?.data;
        return resData;
    }
)
// Sign In Function //
export const signin = createAsyncThunk('/signin',
    async (formData) => {
        let res = await axiosInstance.post(endpoint.auth.signin, formData);
        let resData = res?.data;
        return resData;
    }
)

export const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {

        token_check: (state) => {
            let token = localStorage?.getItem('token');
            if (token !== null && token !== undefined) {
                state.isLogin = true;
            } else {
                state.isLogin = false;
            }
            console.log("TOKEN " +token);

        },
        handelLogout: (state,) => {

            state.isLogin = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state, { payload }) => {
            state.upload_status = 'loading';

        }).addCase(signup.fulfilled, (state, { payload }) => {
            state.upload_status = "Register successfull";
            localStorage.setItem('first_name', payload?.data.first_name);
            localStorage.setItem('last_name', payload?.data.last_name);
            localStorage.setItem('email', payload?.data.email);

            state.redirectLogin = '/login';

        }).addCase(signup.rejected, (state, { payload }) => {
            state.upload_status = 'faild to register';


        }).addCase(signin.pending, (state, { payload }) => {
            state.upload_status = 'loading';

        }).addCase(signin.fulfilled, (state, { payload }) => {
            state.upload_status = 'login successfully';

            localStorage.setItem('first_name', payload?.data.first_name);
            localStorage.setItem('last_name', payload?.data.last_name);
            localStorage.setItem('email', payload?.data.email);
            localStorage.setItem('token', payload?.token);
            state.isLogin = true;
            state.redirectHome = '/';

        }).addCase(signin.rejected, (state, { payload }) => {
            state.upload_status = 'faild to login'
        })
    }
})
export const { token_check, handelLogout } = authSlice.actions;
export default authSlice;