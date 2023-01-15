// to save time variable into local storage
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducer: {
    save: (state, action) => {
      console.log("REDUCER");
      const newState = [...state.items, action.payload];
      localStorage.setItem("stopwatch", JSON.stringify(newState));
      state.items = newState;
    },
  },
});

export const { save } = watchesSlice.actions;
export default watchesSlice.reducer;
