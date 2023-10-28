import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
const store = configureStore({
  reducer: {
    page: pageSlice, // Add your pageSlice to the store
    // ...other reducers if you have them
  },
});

export default store;
