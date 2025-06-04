import { createSlice } from "@reduxjs/toolkit";
import type { ErrorInterface } from "../../../types/error.interface.ts";
import {
  getBooksByThousandFetch,
  parsBookByIdFetch,
} from "../../../api/fetchLIst.api.ts";
import type { BooksFetchStateInterface } from "../../../types/dataState.interface.ts";

const initialState: BooksFetchStateInterface = {};

const parsBookByIdSlice = createSlice({
  name: "parsBookById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBooksByThousandFetch.fulfilled,
      (state: BooksFetchStateInterface, action) => {
        for (const book of action.payload) {
          state[book._id] = {
            loading: false,
            error: null,
            done: false,
          };
        }
      },
    );
    // pars by id
    builder.addCase(parsBookByIdFetch.pending, (state, action) => {
      const id = action.meta.arg;
      if (typeof id === "string" && state[id]) {
        state[id].loading = true;
        state[id].done = false;
        state[id].error = null;
      }
    });
    builder.addCase(parsBookByIdFetch.fulfilled, (state, action) => {
      const id = action.meta.arg;
      if (typeof id === "string" && state[id]) {
        state[id].loading = false;
        state[id].done = true;
        state[id].error = null;
      }
    });
    builder.addCase(parsBookByIdFetch.rejected, (state, action) => {
      const id = action.meta.arg;
      if (typeof id === "string" && state[id]) {
        state[id].loading = false;
        state[id].done = false;
        state[id].error = (action.payload || action.error) as ErrorInterface;
      }
    });
  },
});

export default parsBookByIdSlice.reducer;
