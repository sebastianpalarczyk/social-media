import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        post: {},
    },
    reducers: {
        addPost: (state, { payload: post }) => {
            state.post = post;
        },
        sendPost: () => {},
        setPost:(state, {payload: post}) => {
            state.post = post;
        }
    },
});

const selectPostState = state => state.post;

export const { addPost, sendPost, setPost } = postSlice.actions;
export const selectPost = state => selectPostState(state).post;
export default postSlice.reducer;