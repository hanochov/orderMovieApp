import { createSlice } from "@reduxjs/toolkit";
import Movie from "../models/movie";
import Order_O from "../models/order";

interface MyState {
  orders: Order_O[];
  currentOrderItemID:number;
}
const INITIAL_STATE: MyState = {
  orders: [],
  currentOrderItemID: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState: INITIAL_STATE,
  reducers: {
     setDefaultMovies(state, action) {
      state.orders.push(action.payload);
    },
    setCurrentOrderItemID(state, action) {
      state.currentOrderItemID = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
