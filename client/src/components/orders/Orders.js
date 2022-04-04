import React from "react";
import style from "styled-components";
import { useSelector } from "react-redux";

const Orders = () => {
  const { orders } = useSelector((state) => state.checkOut);
  return <div>Orders</div>;
};

export default Orders;
