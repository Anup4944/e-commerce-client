import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductsByCategoryAction } from "../../pages/product/productAction";
import Products from "../Products";

const Container = styled.div`
  padding: 20px 20px;
  display: flex;
`;

const Cart = styled.div`
  height: 380px;
  width: 380px;
  border: 1px solid grey;
  margin-left: 20px;
`;

const ProductByCategory = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const { productByCat } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductsByCategoryAction(search));
  }, [dispatch, search]);
  return (
    <>
      {" "}
      <Container>
        <Products />
      </Container>
    </>
  );
};

export default ProductByCategory;
