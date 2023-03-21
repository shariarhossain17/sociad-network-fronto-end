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
    openModal: (state) => {
      state.toggle = !state.toggle;
    },
    closeModal: (state) => {
      state.toggle = false;
    },
  },
});
export const { openSearch, openModal,closeModal } = searchSlice.actions;
export default searchSlice.reducer;
