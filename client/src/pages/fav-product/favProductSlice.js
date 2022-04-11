import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLiked: false,
  status: "",
  message: "",
  prodInfo: [],
  savedInfo: [],
};
const checkOutSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getFavProdByClientSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.prodInfo = payload.onlyProdDt;
    },
    saveFavProdSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isLiked = true;
      state.status = payload.status;
      state.message = payload.message;
      state.prodInfo = payload.savedFav.products;
    },
    removeFavProdSuccess: (state, { payload }) => {
      console.log(payload);
      // const filterProd = state.savedInfo.filter((row) => row._id !== payload);
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      // state.savedInfo = filterProd;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const {
  requestPending,
  getFavProdSuccess,
  saveFavProdSuccess,
  getFavProdByClientSuccess,
  removeFavProdSuccess,
  requestFail,
} = actions;

export default reducer;
