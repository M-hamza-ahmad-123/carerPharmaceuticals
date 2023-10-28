// pageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
  name: "page",
  initialState: {
    selectedPage: null,
  },
  reducers: {
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setSelectedPage } = PageSlice.actions;
export const selectPage = (state) => state.page.selectedPage;
export default PageSlice.reducer;
