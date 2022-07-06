import { createSlice } from "@reduxjs/toolkit";

interface AcessibilityState {
  fontSize: number;
}

export const acessibilitySlice = createSlice({
  name: "Acessibility",
  initialState: { fontSize: 1 } as AcessibilityState,
  reducers: {
    increase: (state) => {
      if (state.fontSize === 2) {
        return;
      }

      const size = Number(state.fontSize) + 0.2;

      state.fontSize = Number(size.toFixed(1));
      console.log(state.fontSize);
    },
    decrease: (state) => {
      if (state.fontSize === 1) {
        return;
      }

      const size = Number(state.fontSize) - 0.2;
      state.fontSize = Number(size.toFixed(1));
      console.log(state.fontSize);
    },
    darkMode: () => {
      document.documentElement.classList.toggle("dark");
    },
  },
});

export const acessibilityReducer = acessibilitySlice.reducer;

export const { increase, decrease, darkMode } = acessibilitySlice.actions;
