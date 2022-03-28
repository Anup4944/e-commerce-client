import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import { Add, DeleteOutline, RemoveCircleOutline } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { mobile } from "../../responsive";
import { removeFromCart } from "./cartAction";
import { useHistory } from "react-router-dom";
import { increaseCartQty, decreaseCartQty } from "./cartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10%" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 600;
  cursor: pointer;
  padding: 10px;

  border: ${(props) => props.type === "fill" && "none"};
  background-color: ${(props) =>
    props.type === "fill" ? "black" : "transparent"};
  color: ${(props) => props.type === "fill" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  border: 1px solid grey;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 20px 0px;
`;
const ProductAmount = styled.div`
  font-size: 25px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;
const Summary = styled.div`
  font-size: 5px;
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.div`
  font-size: 15px; ;
`;
const SummaryItem = styled.h1`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Msg = styled.span`
  color: tomato;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconStyle = {
  cursor: "pointer",
  fontSize: "30px",
  margin: "20px 0px",
};

const Cart = () => {
  const [number, setNumber] = useState();
  const dispatch = useDispatch();

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const { cart, totalProduct } = useSelector((state) => state.cart);

  const cartTotal = cart.reduce((iniVal, row) => {
    if (row.onSale === true) {
      return iniVal + row.buyingItem * row.salePrice;
    } else {
      return iniVal + row.buyingItem * row.price;
    }
  }, 0);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>You bag</Title>
        <Top>
          <TopButton onClick={goBack}>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Your wishlist</TopText>
          </TopTexts>
          <TopButton type="fill">Check Out Now </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              {!cart.length && <Msg>Your cart is empty</Msg>}
              {cart.length &&
                cart.map((item, i) => {
                  const finalPrice = item.onSale
                    ? item.salePrice * item.buyingItem
                    : item.price * item.buyingItem;
                  return (
                    <>
                      <ProductDetails key={item._id}>
                        <Image src={item.images[0]} />
                        <Details>
                          <ProductName>
                            <b>Product: </b> {item.title}
                          </ProductName>
                          <ProductId>
                            <b>ID: </b> {item._id}
                          </ProductId>
                        </Details>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <Add
                              onClick={() =>
                                dispatch(increaseCartQty(item.buyingItem))
                              }
                            />

                            <ProductAmount>{item.buyingItem} </ProductAmount>

                            <RemoveCircleOutline
                              onClick={() =>
                                dispatch(decreaseCartQty(item.buyingItem))
                              }
                            />
                          </ProductAmountContainer>
                          <ProductPrice>$ {finalPrice}</ProductPrice>
                          <DeleteOutline
                            style={iconStyle}
                            onClick={() => {
                              dispatch(removeFromCart(item._id));
                            }}
                          />
                        </PriceDetail>
                      </ProductDetails>
                    </>
                  );
                })}
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cartTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>$ {cartTotal}</SummaryItemPrice>
            </SummaryItem>
            <Button>Check Out Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
