import axios from "axios";
import { baseURL } from "./endpoint";

// PRODUCT IMAGE URL //
let productImageURL='https://wtsacademy.dedicateddevelopers.us/uploads/product';

export const productImagePath=(media)=>{
    return productImageURL + `/${media}`;
}

// PROFILE IMAGE URL
let profileImageURL="https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic";

export const profileImagePath=(media)=>{
    return profileImageURL + `/${media}`;
}

export const axiosInstance = axios.create({
    baseURL
})



axiosInstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token !== null || token !== undefined) {
            config.headers['x-access-token'] = token;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
)
export default axiosInstance;