import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  savedFav: {},
  prodInfo: [],
};
const checkOutSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    saveFavProdSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.savedFav = payload.savedFav;
    },
    getFavProdByClientSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.prodInfo = payload.result;
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
