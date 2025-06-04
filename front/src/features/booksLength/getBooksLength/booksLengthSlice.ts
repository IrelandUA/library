import { createSlice } from "@reduxjs/toolkit";
import type { BooksLengthStateInterface } from "../../../types/dataState.interface.ts";
import { getBooksLengthFetch } from "../../../api/fetchLIst.api.ts";

const initialState: BooksLengthStateInterface = {
  data: {
    number: 0,
    date: "",
  },
};

const booksLengthSlice = createSlice({
  name: "getBooksLength",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBooksLengthFetch.fulfilled,
      (state: BooksLengthStateInterface, action) => {
        state.data = action.payload;
      },
    );
  },
});

export default booksLengthSlice.reducer;
