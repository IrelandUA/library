import { createAsyncThunk } from "@reduxjs/toolkit";

export function fetchToServer(
  fetchName: string,
  baseUrl: string,
  method: string,
) {
  return createAsyncThunk(
    fetchName,
    async (arg: string | undefined, { rejectWithValue }) => {
      try {
        const finalUrl = arg && arg.length > 0 ? `${baseUrl}/${arg}` : baseUrl;
        const res = await fetch(finalUrl, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          return rejectWithValue({
            status: res.status,
            message: `Failed to fetch ${fetchName} - status: ${res.status}!`,
          });
        }
        return await res.json();
      } catch (e) {
        console.error(e);
        return rejectWithValue({
          status: 500,
          message: `Failed to fetch ${fetchName} - status: 500!`,
        });
      }
    },
  );
}
