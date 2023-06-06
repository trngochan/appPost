import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        title: "Add ",
        desc: "Add some description",
        tags: 0,
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
        state.posts.push(action.payload);
    },
  },
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
