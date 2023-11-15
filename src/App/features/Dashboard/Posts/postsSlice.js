// import { createSlice } from "@reduxjs/toolkit";

// const postsSlice = createSlice({
//     name: "posts",
//     initialState: {
//         posts: [{
//             id: "1",
//             message: "Content numer jeden",
//             comment: "Comment numer jeden",

//         },
//         {
//             id: "2",
//             message: "Content numer dwa",
//             comment: "Comment numer dwa",
//         }],
//     },

//     reducers: {
//         fetchExamplePosts: () => { },
//         setPosts: (state, { payload: posts }) => {
//             state.posts = posts;
//         },

//     },
// })

// export const {
//     fetchExamplePosts,
//     setPosts,
// } = postsSlice.actions;

// export const selectPosts = state => state.posts;

// export default postsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asynchroniczna akcja Redux Thunk do pobierania postów
export const fetchExamplePostsAsync = createAsyncThunk(
  'posts/fetchExamplePostsAsync',
  async () => {
    try {
      const response = await axios.get('http://localhost:8080/app/posts');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setPosts: (state, { payload: posts }) => {
      state.posts = posts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamplePostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExamplePostsAsync.fulfilled, (state, { payload: posts }) => {
        state.status = 'succeeded';
        state.posts = posts;
      })
      .addCase(fetchExamplePostsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPosts,fetchExamplePosts } = postsSlice.actions;

export const selectPosts = state => state.posts;

export default postsSlice.reducer;