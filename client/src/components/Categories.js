import React, { useEffect } from "react";
import styled from "styled-components";
import { categoriesItem } from "../data/data";
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

  const { categories } = useSelector((state) => state.category);

  const parentCat =
    categories.length && categories.filter((item) => !item.parentCategory);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  return (
    <Container>
      {categoriesItem.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}{" "}
    </Container>
  );
};

export default Categories;
