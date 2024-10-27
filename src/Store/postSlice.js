import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userPost: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.status = true;
            state.userPost = action.payload.userPost;
        }
    }
})