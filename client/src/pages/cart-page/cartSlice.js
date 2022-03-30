import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  cart: [],
  finalPrice: "",
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

    increaseCartQty: (state, { payload }) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );
      state.cart[itemIndex].buyingItem = payload.buyingItem + 1;
      state.status = "success";
      state.message = "Item item quantity incresed";
    },

    decreaseCartQty: (state, { payload }) => {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === payload._id
      );

      if (state.cart[itemIndex].buyingItem > 1) {
        state.cart[itemIndex].buyingItem = payload.buyingItem - 1;
        state.status = "success";
        state.message = "Item item quantity decreased";
      } else if (state.cart[itemIndex].buyingItem === 0) {
        const filterCart = state.cart.filter((row) => row._id !== payload);
        state.cart = filterCart;
      }
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
  decreaseCartQty,
  increaseCartQty,
  removeProductCartSuccess,
  requestCartFail,
} = actions;
export default reducer;
