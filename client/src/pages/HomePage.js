import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import ProductsOnSale from "../components/ProductsOnSale";
import ProductList from "./product/ProductList";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ProductsOnSale />
      <Categories />
      <ProductList />
    </div>
  );
};

export default HomePage;
