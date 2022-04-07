import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getOrderByClientAction } from "../../pages/orders/checkOutAction";

const Container = styled.div`
  height: 100%;
  padding: 20px 20px;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 30px;
`;

const Item = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 20px;
`;

const SubHeader = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Amount = styled.h3`
  font-size: 20px;
  font-weight: 300;
`;

const Product = styled.ul`
  list-style-type: none;
`;
const ProductInfo = styled.li``;

const Address = styled.ul`
  list-style-type: none;
`;
const AddressInfo = styled.li``;

const Orders = () => {
  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state.login);
  const { status, message, allOrders } = useSelector((state) => state.checkOut);

  useEffect(() => {
    dispatch(getOrderByClientAction(clients._id));
  }, [dispatch]);
  return (
    <Container>
      <Header>{message}</Header>

      {allOrders?.length &&
        allOrders.map((item) => {
          return (
            <Item>
              <SubHeader>Order Number : {item._id}</SubHeader>
              <SubHeader>
                Order Placed Date : {new Date(item._createdAt).toString()}{" "}
              </SubHeader>
              <Amount>Amount Paid : ${item.amount}</Amount>
              <Amount>Shipping Address </Amount>
              <Amount>Status : {item.status} </Amount>

              <Product>
                <ProductInfo></ProductInfo>
              </Product>

              <Address>
                {" "}
                <AddressInfo>
                  {item.address.line1} , {item.address.state}{" "}
                </AddressInfo>
                <AddressInfo>
                  {item.address.city} ,{item.address.country}{" "}
                </AddressInfo>
              </Address>
            </Item>
          );
        })}
    </Container>
  );
};

export default Orders;
