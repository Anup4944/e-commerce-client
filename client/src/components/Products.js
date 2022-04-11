import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FilteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Filter = styled.div`
  margin: 20px;

  ${mobile({ display: "flex", flexDirection: "column", width: "0px 20px" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Products = ({
  allProducts,
  byDate,
  setFilteredPro,
  byPriceDec,
  pbyPriceAsc,
}) => {
  return (
    <>
      {" "}
      <FilteredContainer>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option onClick={() => setFilteredPro(byDate)}>Newest</Option>
            <Option selected onClick={() => setFilteredPro(byPriceDec)}>
              Price (asc){" "}
            </Option>
            <Option onClick={() => setFilteredPro(pbyPriceAsc)}>
              Price(decs)
            </Option>
          </Select>
        </Filter>
      </FilteredContainer>
      <Container>
        {allProducts?.map((item) => (
          <Product item={item} key={item.id} _id={item._id} />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Products;
