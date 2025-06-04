import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { checkBooksLengthFetch } from "../../../api/fetchLIst.api.ts";
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

const checkBooksLengthSlice = createSlice({
  name: "checkBooksLength",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkBooksLengthFetch.pending, handlePending);
    builder.addCase(checkBooksLengthFetch.fulfilled, handleFulfilled);
    builder.addCase(checkBooksLengthFetch.rejected, handleRejected);
  },
});

export default checkBooksLengthSlice.reducer;
