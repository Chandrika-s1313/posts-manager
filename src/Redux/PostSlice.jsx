import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(POSTS_URL);
  return await response.json();
});

// Add new post
export const addNewPost = createAsyncThunk("posts/addNewPost", async (newPost) => {
  const response = await fetch(POSTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  const data = await response.json();
  // Give fake ID if API doesn’t return
  return { ...newPost, id: data.id || Date.now() };
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {

     addPostLocal: (state, action) => {
      // create fake id if missing
      const newPost = { ...action.payload, id: Date.now() };
      state.posts.push(newPost);
    },
    updatePostLocal: (state, action) => {
      const { id, title, body } = action.payload;
      const existingPost = state.posts.find((p) => p.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    deletePostLocal: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = [...state.posts , ...action.payload];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const { addPostLocal,updatePostLocal, deletePostLocal } = postsSlice.actions;
export default postsSlice.reducer;
