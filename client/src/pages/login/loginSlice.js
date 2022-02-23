import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  status: "",
  message: "",
  clients: [],
};
const loginSlice = {
  name: "login",
  initialState,
  reducers: {},
};

const { reducer, actions } = loginSlice;
export const {} = actions;

export default reducer;
