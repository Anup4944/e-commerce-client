import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import { mobile } from "../../responsive";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Title = styled.div`
  margin: 20px;
`;
const FilteredContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const ProductList = () => {
  const { allProducts } = useSelector((state) => state.product);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <FilteredContainer>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price(decs)</Option>
          </Select>
        </Filter>
      </FilteredContainer>
      <Products allProducts={allProducts} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
