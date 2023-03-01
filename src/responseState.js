import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getResponseData = createAsyncThunk(
    'getPostsData',
    async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data;
    }
)

const responseSlice = createSlice({
    name: "postResponse",
    initialState: {
        data: []
    },
    extraReducers: {
        [getResponseData.pending]: (state)=>{
            state.data = [];
        },
        [getResponseData.fulfilled]:(state,action)=>{
            state.data = action.payload
        },
        [getResponseData.rejected]:(state)=>{
            state.data = []
        }
    }
})

export default responseSlice.reducer;