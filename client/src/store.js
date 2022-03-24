import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import registerReducer from "./pages/register/registerSlice";
import passReducer from "./pages/passreset-page/passResetSlice";
import productReducer from "./pages/product/productSlice";
import cartReducer from "./pages/cart-page/cartSlice";
import categoryReducer from "./pages/categories-page/categorySlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    passwordReset: passReducer,
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
});

export default store;
