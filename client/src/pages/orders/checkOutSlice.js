import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  orders: {},
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
    // getOrderByClient:(),
    checkoutFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const { checkoutPending, checkOutSuccess, checkoutFail } = actions;

export default reducer;
