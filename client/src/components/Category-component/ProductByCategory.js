import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductsByCategoryAction } from "../../pages/product/productAction";
import Slider from "../Slider";
import Product from "../Product";

const Container = styled.div`
  padding: 20px 20px;
  display: flex;
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
      {productByCat?.map((item) => (
        <Product item={item} key={item.id} _id={item._id} />
      ))}
    </>
  );
};

export default ProductByCategory;
