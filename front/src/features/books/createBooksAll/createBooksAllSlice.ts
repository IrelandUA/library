import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { createBooksAllFetch } from "../../../api/fetchLIst.api.ts";
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

const createBooksAllSlice = createSlice({
  name: "createBooksAllSlice",
  initialState,
  reducers: {
    resetCreateBooksAllState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(createBooksAllFetch.pending, handlePending);
    builder.addCase(createBooksAllFetch.fulfilled, handleFulfilled);
    builder.addCase(createBooksAllFetch.rejected, handleRejected);
  },
});

export const { resetCreateBooksAllState } = createBooksAllSlice.actions;
export default createBooksAllSlice.reducer;
