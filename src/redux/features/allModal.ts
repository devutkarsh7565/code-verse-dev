import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  tagModal: boolean;
}

const initialState: CounterState = {
  tagModal: false,
};

export const allModalSlice = createSlice({
  name: "allModal",
  initialState,
  reducers: {
    tagModalOpen: (state) => {
      state.tagModal = true;
    },

    tagModalClose: (state) => {
      state.tagModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { tagModalOpen, tagModalClose } = allModalSlice.actions;

export default allModalSlice.reducer;
