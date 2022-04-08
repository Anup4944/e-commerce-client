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
  font-family: "Courier New", Courier, monospace;
`;

const Item = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 20px;
`;

const ItmWrapper = styled.div`
  flex: 1;
  margin: 25px 10px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubHeader = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const StatusBox = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.h3`
  font-size: 20px;
  font-weight: 300;
`;

const Status = styled.span`
  font-size: 15px;
  font-weight: 700;
  border-radius: 12px;
  background-color: #c0c0c0;
  color: green;
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
  const { message, allOrders } = useSelector((state) => state.checkOut);

  const sortByCreated = allOrders?.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });

  useEffect(() => {
    dispatch(getOrderByClientAction(clients._id));
  }, [dispatch]);
  return (
    <Container>
      <Header>{message}</Header>

      {sortByCreated?.length &&
        sortByCreated.map((item) => {
          return (
            <Item>
              <ItmWrapper>
                <SubHeader>Order Placed at {item.createdAt}</SubHeader>
                <SubHeader>Order Number {item._id}</SubHeader>

                <StatusBox>
                  <Amount>Status : </Amount> <Status> {item.status} </Status>
                </StatusBox>
                <Amount>Amount Paid : ${item.amount}</Amount>
              </ItmWrapper>

              <ItmWrapper>
                <Amount>Order Details </Amount>

                {item?.products?.map((prod) => {
                  return (
                    <Product>
                      <ProductInfo>{prod.title}</ProductInfo>
                      <ProductInfo></ProductInfo>
                    </Product>
                  );
                })}

                <Amount>Shipping Address </Amount>
                <Address>
                  {" "}
                  <AddressInfo>
                    {item?.address?.line1} , {item?.address?.state}{" "}
                  </AddressInfo>
                  <AddressInfo>
                    {item?.address?.city} ,{item?.address?.country}{" "}
                  </AddressInfo>
                </Address>
              </ItmWrapper>
            </Item>
          );
        })}
    </Container>
  );
};

export default Orders;
