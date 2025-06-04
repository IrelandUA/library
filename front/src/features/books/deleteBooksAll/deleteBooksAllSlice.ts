import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { deleteBooksAllFetch } from "../../../api/fetchLIst.api.ts";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  resetState,
} from "../../../utils/fetchStateHandlers.ts";

const initialState: FetchStateInterface = {
  done: false,
  loading: false,
  error: null,
};

const deleteBooksAllSlice = createSlice({
  name: "deleteBooksAllFetch",
  initialState,
  reducers: {
    resetDeleteBooksAllState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBooksAllFetch.pending, handlePending);
    builder.addCase(deleteBooksAllFetch.fulfilled, handleFulfilled);
    builder.addCase(deleteBooksAllFetch.rejected, handleRejected);
  },
});

export const { resetDeleteBooksAllState } = deleteBooksAllSlice.actions;
export default deleteBooksAllSlice.reducer;
