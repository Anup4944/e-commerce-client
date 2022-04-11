import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFavProdByClientAction } from "../../pages/fav-product/favProductAction";
import Product from "../Product";

const Container = styled.div`
  height: 100%;
  margin: 10px 0px;
  padding: 20px 20px;
`;

const FavProdComp = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { prodInfo, message } = useSelector((state) => state.favourite);

  // const sortByCreated = prodInfo?.slice().sort((a, b) => {
  //   const dateA = new Date(a.createdAt);
  //   const dateB = new Date(b.createdAt);

  //   return dateB - dateA;
  // });

  useEffect(() => {
    dispatch(getFavProdByClientAction(id));
  }, [dispatch]);

  return (
    <>
      <Container>
        {message}
        {prodInfo?.length &&
          prodInfo.map((item) => {
            return <Product item={item} key={item.id} _id={item._id} />;
          })}
      </Container>
    </>
  );
};

export default FavProdComp;
