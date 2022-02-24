import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  status: "",
  message: "",
  clients: [],
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
      state.isAuth = false;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.status = payload.status;
      state.message = payload.message;
      state.clients = payload.user;
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { loginPending, loginSuccess, loginFail } = actions;

export default reducer;
