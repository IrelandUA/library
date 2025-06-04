import { createSlice } from "@reduxjs/toolkit";
import type { FetchStateInterface } from "../../../types/fetchState.interface.ts";
import { deleteBooksByThousandFetch } from "../../../api/fetchLIst.api.ts";
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

const deleteBooksByThousandSlice = createSlice({
  name: "deleteBooksByThousand",
  initialState,
  reducers: {
    resetDeleteBooksByThousandState: resetState,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteBooksByThousandFetch.pending, handlePending);
    builder.addCase(deleteBooksByThousandFetch.fulfilled, handleFulfilled);
    builder.addCase(deleteBooksByThousandFetch.rejected, handleRejected);
  },
});

export const { resetDeleteBooksByThousandState } =
  deleteBooksByThousandSlice.actions;
export default deleteBooksByThousandSlice.reducer;
