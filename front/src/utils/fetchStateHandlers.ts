import type { FetchStateInterface } from "../types/fetchState.interface";
import type { ErrorInterface } from "../types/error.interface.ts";

export const resetState = (state: FetchStateInterface) => {
  state.loading = false;
  state.done = false;
  state.error = null;
};

export const handlePending = (state: FetchStateInterface) => {
  state.loading = true;
  state.done = false;
  state.error = null;
};

export const handleFulfilled = (state: FetchStateInterface) => {
  state.loading = false;
  state.done = true;
  state.error = null;
};

export const handleRejected = (state: FetchStateInterface, action: any) => {
  state.loading = false;
  state.done = false;
  if (action && action?.payload) {
    state.error = action.payload as ErrorInterface;
  } else {
    state.error = action.error as ErrorInterface;
  }
};
