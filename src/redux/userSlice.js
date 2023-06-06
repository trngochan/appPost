import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Tran Ngoc Han",
    age: 20,
    about: "I'm 2 developer",
    avaUrl:
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/329884424_1220435775344915_315236327352053159_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=soS8W9yQhagAX_9d3D7&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDXYo2Q1s_825_h8VUTZRfNGS63_tpW6ctbFeGYWTF5AQ&oe=647A4B2E",
    themeColor: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateError, updateSuccess, updateStart } = userSlice.actions;
export default userSlice.reducer;
