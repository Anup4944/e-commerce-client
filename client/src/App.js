import React from "react";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

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

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
