import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import registerReducer from "./pages/register/registerSlice";
import passReducer from "./pages/passreset-page/passResetSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    passwordReset: passReducer,
  },
});

export default store;
