import React from "react";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import ProductByCategory from "../../components/category-component/ProductByCategory";

const CategoryPage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <ProductByCategory />
    </>
  );
};

export default CategoryPage;
