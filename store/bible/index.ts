import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../lib/api";
import { getAllChapterResponse } from "./types";

type fetchBibleError = {
  status: number;
  message: string;
};

export const fetchBible = createAsyncThunk<
  getAllChapterResponse,
  string,
  { rejectValue: fetchBibleError }
>("bible/fetchBible", async (url, { rejectWithValue }) => {
  ("");
  const res = await api.get<getAllChapterResponse>(url);

  if (res.status === 404) {
    return rejectWithValue({
      status: res.status,
      message: res.statusText,
    });
  }

  if (res.status !== 200) {
    return rejectWithValue({ status: res.status, message: res.statusText });
  }

  return res.data;
});

interface IBibleInitialState {
  loading: boolean;
  error: boolean;
  errorMessage: fetchBibleError;
  success: boolean;
  data: null | getAllChapterResponse;
}

const bibleSlice = createSlice({
  name: "Bible",
  initialState: {} as IBibleInitialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchBible.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    });

    addCase(fetchBible.rejected, (state, { payload }) => {
      if (payload) {
        state.errorMessage = payload;
      }
      state.error = true;
      state.loading = false;
      state.success = false;
    });

    addCase(fetchBible.fulfilled, (state, { payload }) => {
      state.success = true;
      state.data = payload;
      state.error = true;
      state.loading = false;
    });
  },
});

export const bibleReducer = bibleSlice.reducer;
