import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../Api/axiosinstance";
import { endpoint } from "../Api/endpoint";


const initialState = {
    upload_status: '',
    productData: [],
    list: [{}],
    totalpage: '',
    editList: [{}],
    redirectProduct: null,
}

// CREATE PRODUCT & ADD IMAGE //
export const addImages = createAsyncThunk('crud/addImages',
    async (formData) => {
        let res = await axiosInstance.post(endpoint.crud.create, formData);
        let resData = res?.data;
        return resData
    }
)

// SHOW PRODUCT DATA //
export const productList = createAsyncThunk('crud/productList',
    async (formData) => {
        let res = await axiosInstance.post(endpoint.crud.list, formData);
        let resData = res?.data;
        return resData;
    }
)

//EDIT PRODUCT DATA //
export const editProductList = createAsyncThunk('crud/editProductList',
    async (id) => {
        let res = await axiosInstance.get(`${endpoint.crud.details.replace(':id', id)}`);
        let resData = res?.data;
        return resData;
    }
)

// UPDATE PRODUCT DATA //
export const editProductData = createAsyncThunk(`crud/editProductData`,
    async ( formData) => {
        let res = await axiosInstance.post(endpoint.crud.update, formData);
        let resData = res?.data;
        return resData;
    }
)

// REMOVE DATA //
export const deleteProduct = createAsyncThunk('crud/deleteProduct',
    async (formData) => {
        let res = await axiosInstance.post(endpoint.crud.remove, formData);
        let resData = res?.data;
        return resData;
    }
)
export const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // IMAGE CREATE //
        builder.addCase(addImages.pending, (state, { payload }) => {
            state.upload_status = 'loading...';
        }).addCase(addImages.fulfilled, (state, { payload }) => {
            state.upload_status = 'image successfully added';
        }).addCase(addImages.rejected, (state, { payload }) => {
            state.upload_status = "faild to image";

        })
        // SHOW PRODUCT DATA //
        .addCase(productList.pending, (state, { payload }) => {
            state.upload_status = 'loading...';

        }).addCase(productList.fulfilled, (state, { payload }) => {
            state.upload_status = 'product list fetch successfully';
            state.list = payload?.data;
            state.totalpage = payload?.totalPages;

        }).addCase(productList.rejected, (state, { payload }) => {
            state.upload_status = 'faild to fetch';

            // REMOVE PRODUCT //
        }).addCase(deleteProduct.pending, (state, { payload }) => {
            state.upload_status = 'loading...'
        }).addCase(deleteProduct.fulfilled, (state, { payload }) => {
            state.upload_status = 'Product removed successfully';
            state.list = state.list.filter((product) => product._id !== payload._id);
        }).addCase(deleteProduct.rejected, (state, { payload }) => {
            state.upload_status = 'faild to remove product';
        })

            // EDIT PRODUCT LIST // 
            .addCase(editProductList.pending, (state, { payload }) => {
                state.upload_status = 'loading....';

            }).addCase(editProductList.fulfilled, (state, { payload }) => {
                state.upload_status = 'product edit successfully';
                state.editList = payload?.data;

            }).addCase(editProductList.rejected, (state, { payload }) => {
                state.upload_status = 'faild to edit product';
                console.error('Update failed with error:', payload);
            })

            // UPDATE PRODUCT
            .addCase(editProductData.pending, (state, { payload }) => {
                state.upload_status = 'loading...';

            }).addCase(editProductData.fulfilled, (state, { payload }) => {
                state.upload_status = 'Product data update successfully';
                state.list = state.list.map(product =>
                    product?._id === payload?._id ? { ...product, ...payload } : product);

            }).addCase(editProductData.rejected, (state, { payload }) => {
                state.upload_status = 'faild to update product';
            })
    }
})
export default crudSlice;