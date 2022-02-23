import React from "react";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import SignIn from "./pages/login/SignIn";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <SignIn />
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
