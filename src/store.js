import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
const store = configureStore({
  reducer: counterSlice.reducer
});
export const counterActions = counterSlice.actions;
export default store;
