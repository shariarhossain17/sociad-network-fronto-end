import searchSlice from "@/features/search/searchSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export default store;
