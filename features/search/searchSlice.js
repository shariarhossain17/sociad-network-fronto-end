import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSearch: false,
  toggleModal:false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    openModal: (state) => {
      state.toggleModal = !state.toggleModal;
    },
    closeModal: (state) => {
      state.toggleModal = false;
    },
  },
});
export const { openSearch, openModal,closeModal } = searchSlice.actions;
export default searchSlice.reducer;
