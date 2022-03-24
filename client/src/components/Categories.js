import React, { useEffect } from "react";
import styled from "styled-components";
import { categories } from "../data/data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategoriesAction } from "../pages/categories-page/categoryAction";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  });
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}{" "}
    </Container>
  );
};

export default Categories;
