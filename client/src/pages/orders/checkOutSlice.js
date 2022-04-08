import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  orders: {},
  purchaseHistory: {},
  allOrders: [],
};
const checkOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    checkoutPending: (state) => {
      state.isLoading = true;
    },
    checkOutSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.orders = payload.stripeRes;
    },
    saveOrderSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allOrders = payload.savedOrder;
    },
    getOrderByClientSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allOrders = payload.result;
    },
    checkoutFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    saveOrderFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allOrders = null;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const {
  checkoutPending,
  checkOutSuccess,
  saveOrderSuccess,
  getOrderByClientSuccess,
  saveOrderFail,
  checkoutFail,
} = actions;

export default reducer;
