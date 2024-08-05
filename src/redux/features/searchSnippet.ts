import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISearchSnippetState {
  searchSnippet: string;
  filterSnippetByTag: string;
}

const initialState: ISearchSnippetState = {
  searchSnippet: "",
  filterSnippetByTag: "",
};

export const searchSnippetSlice = createSlice({
  name: "searchSnippet",
  initialState,
  reducers: {
    setSearchSnippet: (state, action) => {
      state.searchSnippet = action.payload;
    },
    setFilterSnippetByTag: (state, action) => {
      state.filterSnippetByTag = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchSnippet, setFilterSnippetByTag } =
  searchSnippetSlice.actions;

export default searchSnippetSlice.reducer;
