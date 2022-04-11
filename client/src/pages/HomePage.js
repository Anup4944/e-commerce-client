import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import ProductsOnSale from "../components/ProductsOnSale";
import Slider from "../components/Slider";
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
