import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { popularProducts } from "../data/data";
import { getAllProductsAction } from "../pages/product/productAction";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);
  return (
    <Container>
      {allProducts.map((item) => (
        <Product item={item} key={item.id} _id={item._id} />
      ))}
    </Container>
  );
};

export default Products;
