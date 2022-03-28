import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../pages/product/productAction";

const ProductsOnSale = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const { allProducts } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const productOnSale = allProducts.filter((item) => item.onSale === true);
  const productNotSale = allProducts.filter((item) => item.onSale === !true);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

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
    <Slider
      sliderIndex={sliderIndex}
      setSliderIndex={setSliderIndex}
      productOnSale={productOnSale}
      productNotSale={productNotSale}
      handleOnClick={handleOnClick}
    />
  );
};

export default ProductsOnSale;
