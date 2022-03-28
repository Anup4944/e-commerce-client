import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductsByCategoryAction } from "../../pages/product/productAction";
import Slider from "../Slider";

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
  const [sliderIndex, setSliderIndex] = useState(0);

  const { search } = useLocation();
  const dispatch = useDispatch();

  const { productByCat } = useSelector((state) => state.product);

  const productOnSale = productByCat.filter((item) => item.onSale === true);
  const productNotSale = productByCat.filter((item) => item.onSale === !true);

  useEffect(() => {
    dispatch(getAllProductsByCategoryAction(search));
  }, [dispatch, search]);

  const handleOnClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(
        sliderIndex === 0
          ? (productOnSale.length
              ? productOnSale.length
              : productNotSale.length) - 1
          : sliderIndex - 1
      );
    } else {
      setSliderIndex(
        sliderIndex ===
          (productOnSale.length
            ? productOnSale.length
            : productNotSale.length) -
            1
          ? 0
          : sliderIndex + 1
      );
      console.log(sliderIndex);
    }
  };

  return (
    <>
      {" "}
      <Container>
        <Slider
          sliderIndex={sliderIndex}
          setSliderIndex={setSliderIndex}
          productOnSale={productOnSale}
          productNotSale={productNotSale}
          productByCat={productByCat}
          handleOnClick={handleOnClick}
        />
      </Container>
    </>
  );
};

export default ProductByCategory;
