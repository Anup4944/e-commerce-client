import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFavProdByClientAction } from "../../pages/fav-product/favProductAction";

const FavProdComp = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(getFavProdByClientAction(id));
  }, [dispatch]);
  return <div>FavProdComp</div>;
};

export default FavProdComp;
