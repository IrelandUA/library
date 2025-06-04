import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { parsBooksStopFetch } from "../../../api/fetchLIst.api.ts";
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

const parsBooksStopSlice = createSlice({
  name: "parsBooksStop",
  initialState,
  reducers: {
    resetParsBooksStopState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(parsBooksStopFetch.pending, handlePending);
    builder.addCase(parsBooksStopFetch.fulfilled, handleFulfilled);
    builder.addCase(parsBooksStopFetch.rejected, handleRejected);
  },
});

export const { resetParsBooksStopState } = parsBooksStopSlice.actions;
export default parsBooksStopSlice.reducer;
