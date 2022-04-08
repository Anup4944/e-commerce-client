import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
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
      console.log("payload", payload);
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.prodInfo = payload.prodByClientId;
    },
    saveFavProdSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.savedInfo = payload.savedFav;
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
  requestFail,
} = actions;

export default reducer;
