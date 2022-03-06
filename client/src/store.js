import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import registerReducer from "./pages/register/registerSlice";
import passReducer from "./pages/passreset-page/passResetSlice";
import productReducer from "./pages/product/productSlice";
import cartReducer from "./pages/cart-page/cartSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    passwordReset: passReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
