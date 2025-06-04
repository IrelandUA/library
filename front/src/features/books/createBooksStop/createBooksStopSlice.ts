import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { createBooksStopFetch } from "../../../api/fetchLIst.api.ts";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "../../../utils/fetchStateHandlers.ts";

const initialState: FetchStateInterface = {
  done: false,
  loading: false,
  error: null,
};

const createBooksStopSlice = createSlice({
  name: "createBooksStop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBooksStopFetch.pending, handlePending);
    builder.addCase(createBooksStopFetch.fulfilled, handleFulfilled);
    builder.addCase(createBooksStopFetch.rejected, handleRejected);
  },
});

export default createBooksStopSlice.reducer;
