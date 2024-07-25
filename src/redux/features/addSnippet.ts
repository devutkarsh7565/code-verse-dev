import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAddSnippetState {
  addSnippet: boolean;
}

const initialState: IAddSnippetState = {
  addSnippet: false,
};

export const addSnippetSlice = createSlice({
  name: "addSnippet",
  initialState,
  reducers: {
    addSnippetContainerOpen: (state) => {
      state.addSnippet = true;
    },

    addSnippetContainerClose: (state) => {
      state.addSnippet = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSnippetContainerOpen, addSnippetContainerClose } =
  addSnippetSlice.actions;

export default addSnippetSlice.reducer;
