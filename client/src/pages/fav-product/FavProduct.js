import React, { useEffect } from "react";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getFavProdByClientAction } from "./favProductAction";

const FavProduct = () => {
  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getFavProdByClientAction(clients._id));
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Announcement />
      FavProduct
      <Footer />
    </>
  );
};

export default FavProduct;
