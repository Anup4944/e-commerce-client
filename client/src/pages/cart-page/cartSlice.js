import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cart: [],
};

const checkOutSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartRequestPending: (state) => {
      state.isLoading = true;
    },
    addProductCartSuccess: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeProductCartSuccess: (state, { payload }) => {
      const filterCart = state.cart.filter(
        (row) => row.currentViewList._id !== payload
      );
      state.cart = filterCart;
    },

    requestCartFail: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const {
  cartRequestPending,
  addProductCartSuccess,
  removeProductCartSuccess,
  requestCartFail,
} = actions;
export default reducer;
