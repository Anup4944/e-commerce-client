import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categories: [],
};

const productSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getAllCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.categories = payload.allCategories;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = productSlice;
export const {
  requestPending,

  getAllCategorySuccess,

  requestFail,
} = actions;

export default reducer;
