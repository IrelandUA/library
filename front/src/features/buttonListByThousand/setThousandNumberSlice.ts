import { createSlice } from "@reduxjs/toolkit";

export interface ThousandNumber {
  number: number;
}

const initialState: ThousandNumber = {
  number: 0,
};

const thousandNumberSlice = createSlice({
  name: "thousandNumber",
  initialState,
  reducers: {
    setThousand(state, action) {
      state.number = action.payload;
    },
  },
});

export const { setThousand } = thousandNumberSlice.actions;
export default thousandNumberSlice.reducer;
