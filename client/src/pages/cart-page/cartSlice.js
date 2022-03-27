import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  cart: [],
  totalProduct: "",
};

const checkOutSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartRequestPending: (state) => {
      state.isLoading = true;
    },
    addProductCartSuccess: (state, { payload }) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].buyingItem += payload.buyingItem;
      } else {
        state.cart.push(payload);
        state.status = "success";
        state.message = "Item added to cart";
      }
    },
    addExtraProductSuccess: (state, { payload }) => {
      state.totalProduct = payload.buyingItem + 1;
    },
    removeProductSuccess: (state, { payload }) => {
      state.totalProduct = payload.buyingItem - 1;
    },

    removeProductCartSuccess: (state, { payload }) => {
      const filterCart = state.cart.filter((row) => row._id !== payload);
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
  addExtraProductSuccess,
  removeProductSuccess,
  requestCartFail,
} = actions;
export default reducer;
