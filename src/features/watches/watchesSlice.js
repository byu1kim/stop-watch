// to save time variable into local storage
import { createSlice } from "@reduxjs/toolkit";

const getItems = () => {
  let data = localStorage.getItem("stopwatch");
  if (data === null) {
    data = [];
  } else {
    data = JSON.parse(data);
  }
  return data;
};

const initialState = {
  items: getItems(),
};

export const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    save: (state, action) => {
      const newState = [...state.items, action.payload];
      localStorage.setItem("stopwatch", JSON.stringify(newState));
      state.items = newState;
    },
  },
});

export const { save } = watchesSlice.actions;
export default watchesSlice.reducer;
