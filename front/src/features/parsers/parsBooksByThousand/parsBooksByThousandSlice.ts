import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { parsBooksByThousandFetch } from "../../../api/fetchLIst.api.ts";
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

const parsBooksByThousandSlice = createSlice({
  name: "parsBooksByThousand",
  initialState,
  reducers: {
    resetParsBooksByThousandState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(parsBooksByThousandFetch.pending, handlePending);
    builder.addCase(parsBooksByThousandFetch.fulfilled, handleFulfilled);
    builder.addCase(parsBooksByThousandFetch.rejected, handleRejected);
  },
});

export const { resetParsBooksByThousandState } =
  parsBooksByThousandSlice.actions;
export default parsBooksByThousandSlice.reducer;
