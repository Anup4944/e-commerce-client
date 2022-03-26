import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
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
      state.status = "success";
      state.message = "Item added to cart";
    },
    removeProductCartSuccess: (state, { payload }) => {
      const filterCart = state.cart.filter(
        (row) => row.singleProduct._id !== payload
      );
      state.cart = filterCart;
      state.status = null;
      state.message = null;
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
