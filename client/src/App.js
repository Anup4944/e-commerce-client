import React from "react";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/product/ProductList";
import SingleProduct from "./pages/product/SingleProduct";
import Cart from "./pages/cart-page/Cart";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PassResetPage from "./pages/passreset-page/PassResetPage";
import LoginPage from "./pages/login/LoginPage";
import CategoryPage from "./pages/categories-page/CategoryPage";
import PaymentPage from "./pages/payment-page/PaymentPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/product">
            <ProductList />
          </Route>

          <Route exact path="/categories">
            <CategoryPage />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/password-reset">
            <PassResetPage />
          </Route>

          <Route exact path="/product/:id">
            <SingleProduct />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route exact path="/payment">
            <PaymentPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
