import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  allProducts: [],
  singleProduct: {},
  productByCat: [],
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
    getProductsByCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.productByCat = payload.allProducts;
    },
    // getProductsByNewestSuccess: (state, { payload }) => {
    //   console.log(payload);
    //   state.status = "success";
    //   state.message = "By newest";
    //   state.allProducts = payload.byDate;
    // },
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
  getProductsByCategorySuccess,
  getProductsByNewestSuccess,
} = actions;

export default reducer;
