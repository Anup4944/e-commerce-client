import React, { useEffect } from "react";
import style from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getOrderByClientAction } from "../../pages/orders/checkOutAction";

const Orders = () => {
  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getOrderByClientAction(clients._id));
  }, [dispatch]);
  return <div>Orders</div>;
};

export default Orders;
