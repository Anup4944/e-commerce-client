import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  favProd: [],
  allFavProd: [],
};
const checkOutSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getFavProdSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allFavProd = payload.stripeRes;
    },
    saveFavProdSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.favProd = payload.savedOrder;
    },
    getFavProdByClientSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.favProd = payload.result;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allOrders = null;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const {
  requestPending,
  getFavProdSuccess,
  saveFavProdSuccess,
  getFavProdByClientSuccess,
  requestFail,
} = actions;

export default reducer;
