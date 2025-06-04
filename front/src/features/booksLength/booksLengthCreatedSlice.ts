import { createSlice } from "@reduxjs/toolkit";
import type { BooksCreatedLengthStateInterface } from "../../types/dataState.interface.ts";
import { getBooksLengthCreatedFetch } from "../../api/fetchLIst.api.ts";

const initialState: BooksCreatedLengthStateInterface = {
  data: 0,
};

const booksCreatedLengthSlice = createSlice({
  name: "getBooksLengthCreated",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBooksLengthCreatedFetch.fulfilled,
      (state: BooksCreatedLengthStateInterface, action) => {
        state.data = action.payload;
      },
    );
  },
});

export default booksCreatedLengthSlice.reducer;
