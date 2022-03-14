import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  AddCircleOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  RemoveCircleOutline,
} from "@material-ui/icons";

const ImageContainer = styled.div`
  flex: 1;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Left = styled.div`
  display: grid;
  cursor: pointer;
`;
const Right = styled.div`
  display: grid;
  cursor: pointer;
`;

const ImageSlider = () => {
  const { singleProduct } = useSelector((state) => state.product);

  return (
    <ImageContainer>
      {singleProduct?.images?.length &&
        singleProduct.images.map((item, i) => {
          return <Image src={item}></Image>;
        })}
      <Left>
        <KeyboardArrowLeft />
      </Left>
      <Right>
        {" "}
        <KeyboardArrowRight />
      </Right>
    </ImageContainer>
  );
};

export default ImageSlider;
