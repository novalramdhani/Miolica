import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  count: number;
}

const AppSlice = createSlice({
  name: 'app',
  initialState: {
    count: 0,
  } as AppState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
} = AppSlice.actions;

export default AppSlice;
