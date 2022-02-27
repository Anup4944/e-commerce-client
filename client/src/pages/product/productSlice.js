import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  allProducts: [],
  singleProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productRequestPending: (state) => {
      state.isLoading = true;
    },
    getAllProductsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allProducts = payload.allProducts;
    },
    getSingleProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.singleProduct = payload.singleProduct;
    },
    productRequestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = productSlice;
export const {
  productRequestPending,
  getAllProductsSuccess,
  getSingleProductSuccess,
  productRequestFail,
} = actions;

export default reducer;
