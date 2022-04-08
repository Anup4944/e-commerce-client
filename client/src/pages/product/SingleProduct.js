import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import {
  AddCircleOutlined,
  Favorite,
  FavoriteBorder,
  HeadsetRounded,
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
  margin-top: 20px;
`;
const Warning = styled.h1`
  font-weight: 500;
  margin-top: 20px;
  color: red;
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

const IconContainer = styled.div``;

const SingleProduct = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  const { singleProduct } = useSelector((state) => state.product);
  const { isAuth } = useSelector((state) => state.login);

  const [currentImg, setCurrentImg] = useState(0);
  let { id } = useParams();

  const qtyRef = useRef();

  const { message, status, cart } = useSelector((state) => state.cart);

  const cartId = cart.map((item) => item._id);

  const found = cartId.find((item) => item === id);

  const handleOnClick = () => {
    const buyingItem = number;

    const itemToCart = {
      buyingItem,
      ...singleProduct,
    };

    if (isAuth) {
      dispatch(addToCart(itemToCart));
    } else {
      alert("You must login to continue. ");
    }
  };

  useEffect(() => {
    dispatch(getSingleProductsAction(id));
  }, [dispatch, id]);
  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <ImageSlider
            currentImg={currentImg}
            singleProduct={singleProduct}
            setCurrentImg={setCurrentImg}
          />

          <InfoContainer>
            <Title> {singleProduct?.title}</Title>
            <Decs>{singleProduct?.description}</Decs>

            {singleProduct.onSale ? (
              <Price> $ {singleProduct.salePrice * number} </Price>
            ) : (
              <Price> $ {singleProduct.price * number} </Price>
            )}

            {singleProduct?.isAvailable === true ? (
              <Title>Availabiality: Yes </Title>
            ) : (
              <Warning>Out of stock</Warning>
            )}

            {singleProduct?.isAvailable === true ? (
              <>
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

                  {found === singleProduct._id && status === "success" ? (
                    <SuccessMg>{message}</SuccessMg>
                  ) : null}
                  <Button onClick={handleOnClick}>ADD TO CART </Button>
                </AddContainer>
                <AddContainer>
                  <IconContainer>
                    <FavoriteBorder style={{ cursor: "pointer" }} />
                    <Favorite />
                  </IconContainer>
                </AddContainer>
              </>
            ) : null}
          </InfoContainer>
        </Wrapper>

        <Footer />
      </Container>
    </>
  );
};

export default SingleProduct;
