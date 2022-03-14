import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import {
  AddCircleOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  RemoveCircleOutline,
} from "@material-ui/icons";
import { mobile } from "../../responsive";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProductsAction } from "./productAction";
import { useParams } from "react-router-dom";
import { addToCart } from "../cart-page/cartAction";
import ImageSlider from "../../components/iamge-slider/ImageSlider";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Decs = styled.p`
  margin: 20px 0px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Info = styled.span`
  color: red;
`;

const SuccessMg = styled.span`
  color: green;
  margin-top: 10px;
`;

const SingleProduct = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  const { singleProduct } = useSelector((state) => state.product);

  const [currentImg, setCurrentImg] = useState(singleProduct?.images?.length);

  const qtyRef = useRef();

  const { message, status } = useSelector((state) => state.cart);

  let { id } = useParams();

  const handleOnClick = () => {
    const buyingItem = number;

    const itemToCart = {
      buyingItem,
      singleProduct,
    };

    dispatch(addToCart(itemToCart));
  };

  useEffect(() => {
    dispatch(getSingleProductsAction(id));
  }, [dispatch, id]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageSlider />

        <InfoContainer>
          <Title> {singleProduct?.title}</Title>
          <Decs>{singleProduct?.description}</Decs>

          <Price> $ {singleProduct.price * number} </Price>

          {singleProduct?.isAvailable === true ? (
            <Title>Availabiality: Yes </Title>
          ) : (
            <Title>Out of stock</Title>
          )}
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutline
                ref={qtyRef}
                onClick={() => setNumber(number - 1)}
              />
              <Amount>{number}</Amount>
              <AddCircleOutlined
                ref={qtyRef}
                onClick={() => setNumber(number + 1)}
              />
            </AmountContainer>

            {status === "success" && <SuccessMg>{message}</SuccessMg>}
            <Button onClick={handleOnClick}>ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default SingleProduct;
