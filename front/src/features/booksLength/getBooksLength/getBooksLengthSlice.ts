import { createSlice } from "@reduxjs/toolkit";
import { getBooksLengthFetch } from "../../../api/fetchLIst.api.ts";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
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

const getBooksLengthSlice = createSlice({
  name: "getBooksLength",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksLengthFetch.pending, handlePending);
    builder.addCase(getBooksLengthFetch.fulfilled, handleFulfilled);
    builder.addCase(getBooksLengthFetch.rejected, handleRejected);
  },
});

export default getBooksLengthSlice.reducer;
