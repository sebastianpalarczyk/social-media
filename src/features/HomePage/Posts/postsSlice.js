import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [{
            content:"Content numer jeden",
            comment:"Comment numer jeden",
    
        },
        {
            content:"Content numer dwa",
            comment:"Comment numer dwa",
        }],
    },
    reducers:{
        fetchExamplePosts: () => {},
        setPosts: (state, {payload: posts}) => {
            state.posts = posts;
        },

    },

})

export const {
    fetchExamplePosts,
    setPosts,
} = postsSlice.actions;

export const selectPosts = state => state.posts;

export default postsSlice.reducer;