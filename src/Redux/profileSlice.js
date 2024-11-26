import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../Api/axiosinstance";
import { endpoint } from "../Api/endpoint";

const initialState = {
    profileDetails: [],
    isLoading: null,
    isError: null
}

// PROFILE DATA //
export const profiledatafetch = createAsyncThunk('profile/profiledatafetch',
    async () => {
        let response = await axiosInstance.get(endpoint.auth.profiledetails);
        return response.data;
    }
)

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(profiledatafetch.pending, (state) => {
            state.isLoading = true;
            state.isError = null
        }).addCase(profiledatafetch.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.profileDetails = payload?.data;
        }).addCase(profiledatafetch.rejected, (state, {payload}) => {
            state.isLoading = false;
        })
    }
})
export default profileSlice.reducer;