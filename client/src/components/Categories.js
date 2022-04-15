import React from "react";
import styled from "styled-components";
import { categoriesItem } from "../data/data";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-auto-rows: 350px;
  ${mobile({ padding: "0px", display: "flex", flexDirection: "column" })}
`;

const Categories = () => {
  const { search } = useLocation();

  // const { categories } = useSelector((state) => state.category);

  // const parentCat =
  //   categories?.length && categories.filter((item) => !item.parentCategory);

  return (
    <>
      <Container>
        {categoriesItem.map((item) => {
          return (
            <>
              <CategoryItem item={item} key={item.id} search={search} />
            </>
          );
        })}{" "}
      </Container>
    </>
  );
};

export default Categories;
