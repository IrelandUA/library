import { createSlice } from "@reduxjs/toolkit";
import { getBooksLengthCreatedFetch } from "../../api/fetchLIst.api.ts";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "../../utils/fetchStateHandlers.ts";
import type { FetchStateInterface } from "../../types/fetchState.interface.ts";

const initialState: FetchStateInterface = {
  done: false,
  loading: false,
  error: null,
};

const getBooksCreatedLengthSlice = createSlice({
  name: "getBooksLengthCreated",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksLengthCreatedFetch.pending, handlePending);
    builder.addCase(getBooksLengthCreatedFetch.fulfilled, handleFulfilled);
    builder.addCase(getBooksLengthCreatedFetch.rejected, handleRejected);
  },
});

export default getBooksCreatedLengthSlice.reducer;
