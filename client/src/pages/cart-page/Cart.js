import React, { useState, useEffect } from "react";
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
import StrikeCheckout from "react-stripe-checkout";
import axios from "axios";
import { checkOutSuccess, checkoutFail } from "../orders/checkOutSlice";
import { saveOrderAction } from "../orders/checkOutAction";

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
  ${mobile({ display: "none" })}
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0px 10px;
  ${mobile({
    fontSize: "12px",
  })}
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

  ${mobile({ border: "none", flexDirection: "column" })}
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "auto" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ fontSize: "15px" })}
`;

const ProductName = styled.span`
  ${mobile({ display: "flex" })}
`;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${mobile({ fontSize: "10px" })}
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
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();

  const history = useHistory();

  const { cart } = useSelector((state) => state.cart);
  const { clients, isAuth } = useSelector((state) => state.login);

  const KEY = process.env.REACT_APP_STRIPE_KEY;

  const goBack = () => {
    history.push("/product");
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  const cartTotal = cart?.reduce((iniVal, row) => {
    if (row.onSale === true) {
      return iniVal + row.buyingItem * row.salePrice;
    } else {
      return iniVal + row.buyingItem * row.price;
    }
  }, 0);

  useEffect(() => {
    const striepApi = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:5001/api/v1/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cartTotal,
            name: clients.firstName + clients.lastName,
          }
        );

        const { stripeRes } = data;

        const saveOrder = {
          clientId: clients._id,
          email: clients.email,
          products: cart,
          amount: stripeRes.amount,
          address: stripeRes.billing_details.address,
          status: stripeRes.status,
        };

        dispatch(checkOutSuccess(data)) && dispatch(saveOrderAction(saveOrder));

        data.status === "success"
          ? history.push(`/success`)
          : dispatch(checkoutFail(data));
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && striepApi();
  }, [
    stripeToken,
    cartTotal,
    history,
    cart,
    clients._id,
    clients.email,
    clients.firstName,
    clients.lastName,
    dispatch,
  ]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>You bag </Title>
        <Top>
          <TopButton onClick={goBack}>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText
              onClick={() =>
                isAuth
                  ? history.push(`/liked-product/${clients._id}`)
                  : alert("You must login to continue")
              }
            >
              Your wishlist
            </TopText>
            <TopText
              onClick={() =>
                isAuth
                  ? history.push(`/purchase-history/${clients._id}`)
                  : alert("Please login to view your purchase hisrtory.")
              }
            >
              Your purchase history
            </TopText>
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
                              onClick={() => dispatch(increaseCartQty(item))}
                            />

                            <ProductAmount>{item.buyingItem} </ProductAmount>

                            <RemoveCircleOutline
                              onClick={() => dispatch(decreaseCartQty(item))}
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
            {stripeToken && <span>Processing payment................</span>}
            {!cart.length ? null : (
              <StrikeCheckout
                name="ANUP"
                description={`Your total is $${cartTotal}`}
                panelLabel="PAY NOW"
                billingAddress
                shippingAddress
                amount={cartTotal * 100}
                currency="AUD"
                token={onToken}
                stripeKey={KEY}
              ></StrikeCheckout>
            )}
            )
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
