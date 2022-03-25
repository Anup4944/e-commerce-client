import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { sliderItems } from "../data/data";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAction } from "../pages/product/productAction";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 1.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const Price = styled.h3`
  font-size: 40px;
  color: green;
`;

const Sale = styled.h3`
  font-size: 30px;
  color: red;
  position: relative;
  width: 100px;
  height: 90px;
`;

const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;

const AnimatedSale = styled(Sale)`
  animation: ${heartBeat} 2s infinite;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  margin-top: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const { allProducts } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const productOnSale = allProducts.filter((item) => item.onSale === true);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const handleOnClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(
        sliderIndex === 0 ? productOnSale.length - 1 : sliderIndex - 1
      );
    } else {
      setSliderIndex(
        sliderIndex === productOnSale.length - 1 ? 0 : sliderIndex + 1
      );
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleOnClick("left")}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {productOnSale.map((item) => {
          const savedAmount = item.price - item.salePrice;

          const savePercentage = (savedAmount / item.price) * 100;

          return (
            <>
              <Slide key={item._id}>
                <ImageContainer>
                  <Image src={item.images[0]} />
                </ImageContainer>
                <InfoContainer>
                  <AnimatedSale>🔴{savePercentage}% OFF</AnimatedSale>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>

                  <Price> Sale Price ${item.salePrice}</Price>
                  <Price> You save ${savedAmount}</Price>

                  <Button>BUY NOW</Button>
                </InfoContainer>
              </Slide>
            </>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleOnClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
