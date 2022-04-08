import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFavProdByClientAction } from "../../pages/fav-product/favProductAction";

const Container = styled.div`
  height: 100vh;
`;

const FavProdComp = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { prodInfo, message } = useSelector((state) => state.favourite);

  const sortByCreated = prodInfo?.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });

  console.log(sortByCreated);

  useEffect(() => {
    dispatch(getFavProdByClientAction(id));
  }, [dispatch]);

  return (
    <>
      <Container>
        {message}
        {sortByCreated?.length &&
          sortByCreated.map((item) => {
            return <h1>{item.products[0].title}</h1>;
          })}
      </Container>
    </>
  );
};

export default FavProdComp;
