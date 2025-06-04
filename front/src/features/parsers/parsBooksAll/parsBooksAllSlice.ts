import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { parsBooksAllFetch } from "../../../api/fetchLIst.api.ts";
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

const parsBooksAllSlice = createSlice({
  name: "parsBooksAll",
  initialState,
  reducers: {
    resetParsBooksAllState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(parsBooksAllFetch.pending, handlePending);
    builder.addCase(parsBooksAllFetch.fulfilled, handleFulfilled);
    builder.addCase(parsBooksAllFetch.rejected, handleRejected);
  },
});

export const { resetParsBooksAllState } = parsBooksAllSlice.actions;
export default parsBooksAllSlice.reducer;
