import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch: (state) => {
      state.toggle = !state.toggle;
    },
  },
});
export const { openSearch } = searchSlice.actions;
export default searchSlice.reducer;
