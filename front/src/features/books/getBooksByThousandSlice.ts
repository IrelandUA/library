import { createSlice } from "@reduxjs/toolkit";
import { getBooksByThousandFetch } from "../../api/fetchLIst.api.ts";
import type { FetchStateInterface } from "../../types/fetchState.interface.ts";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "../../utils/fetchStateHandlers.ts";

const initialState: FetchStateInterface = {
  loading: false,
  done: false,
  error: null,
};

const getBooksByThousandSlice = createSlice({
  name: "getBooksByThousand",
  initialState,
  reducers: {
    resetGetBooksByThousandDone: (state: FetchStateInterface) => {
      state.done = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksByThousandFetch.pending, handlePending);
    builder.addCase(getBooksByThousandFetch.fulfilled, handleFulfilled);
    builder.addCase(getBooksByThousandFetch.rejected, handleRejected);
  },
});

export const { resetGetBooksByThousandDone } = getBooksByThousandSlice.actions;
export default getBooksByThousandSlice.reducer;
