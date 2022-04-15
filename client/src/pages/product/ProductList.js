import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Products from "../../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "./productAction";

const Container = styled.div``;

const ProductList = () => {
  const [filteredPro, setFilteredPro] = useState([]);
  console.log(filteredPro);

  const { allProducts } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const byDate = allProducts
    .slice()
    .sort((a, b) =>
      b.createdAt > a.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
    );

  const byPriceDec = allProducts
    .slice()
    .sort((a, b) => (b.price > a.price ? 1 : a.price > b.price ? -1 : 0));

  const pbyPriceAsc = allProducts
    .slice()

    .sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));

  return (
    <Container>
      <Products
        allProducts={allProducts}
        byDate={byDate}
        setFilteredPro={setFilteredPro}
        byPriceDec={byPriceDec}
        pbyPriceAsc={pbyPriceAsc}
      />
    </Container>
  );
};

export default ProductList;
