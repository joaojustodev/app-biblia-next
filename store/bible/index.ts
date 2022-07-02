import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBibleInitialState {
  loading: boolean;
  error: boolean;
  url: string;
}

const bibleSlice = createSlice({
  name: "Bible",
  initialState: {} as IBibleInitialState,
  reducers: {
    fetchBiblePending: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

      state.loading = true;
      state.url = action.payload;
    },
    fetchBibleError: (state) => {
      state.loading = false;
      state.error = true;
      state.url = "";
    },
    fetchBibleSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});

export const bibleReducer = bibleSlice.reducer;

export const { fetchBibleError, fetchBiblePending, fetchBibleSuccess } =
  bibleSlice.actions;
