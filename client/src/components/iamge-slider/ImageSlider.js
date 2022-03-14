import React from "react";
import styled from "styled-components";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 10px;
`;

const rightStyle = {
  position: "absolute",
  top: "50%",
  right: "30px",
  cursor: "pointer",
  zIndex: "10",
  fontSize: "50px",
  userSelect: "none",
};

const leftStyle = {
  position: "absolute",
  top: "50%",
  left: "30px",
  cursor: "pointer",
  zIndex: "10",
  fontSize: "50px",
  userSelect: "none",
};

const ImageSlider = ({ currentImg, singleProduct, setCurrentImg }) => {
  const length = singleProduct?.images?.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  if (!Array.isArray(singleProduct?.images) || length <= 0) {
    return null;
  }
  return (
    <ImageContainer>
      <KeyboardArrowLeft style={leftStyle} onClick={prevSlide} />{" "}
      <KeyboardArrowRight style={rightStyle} onClick={nextSlide} />
      <Image src={singleProduct?.images?.[currentImg]}></Image>
    </ImageContainer>
  );
};

export default ImageSlider;
