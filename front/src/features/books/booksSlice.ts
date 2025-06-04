import { createSlice } from "@reduxjs/toolkit";
import type { BooksStateInterface } from "../../types/dataState.interface.ts";
import { getBooksByThousandFetch } from "../../api/fetchLIst.api.ts";

const initialState: BooksStateInterface = {
  data: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBooksByThousandFetch.fulfilled,
      (state: BooksStateInterface, action) => {
        state.data = action.payload;
      },
    );
  },
});

export default booksSlice.reducer;
