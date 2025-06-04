import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { createBooksByThousandFetch } from "../../../api/fetchLIst.api.ts";
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

const createBooksByThousandSlice = createSlice({
  name: "createBooksByThousand",
  initialState,
  reducers: {
    resetCreateBooksByThousandState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(createBooksByThousandFetch.pending, handlePending);
    builder.addCase(createBooksByThousandFetch.fulfilled, handleFulfilled);
    builder.addCase(createBooksByThousandFetch.rejected, handleRejected);
  },
});

export const { resetCreateBooksByThousandState } =
  createBooksByThousandSlice.actions;
export default createBooksByThousandSlice.reducer;
