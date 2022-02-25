import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  sendOtpReq: false,
};
const passSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    passResetPending: (state) => {
      state.isLoading = true;
    },
    sendOtpSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.sendOtpReq = true;
    },
    passResetSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    passResetFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = passSlice;
export const {
  passResetPending,
  sendOtpSuccess,
  passResetSuccess,
  passResetFail,
} = actions;

export default reducer;
