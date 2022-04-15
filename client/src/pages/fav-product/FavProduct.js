import React from "react";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FavProdComp from "../../components/fav-comp/FavProdComp";

const FavProduct = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <FavProdComp />
      <Footer />
    </>
  );
};

export default FavProduct;
