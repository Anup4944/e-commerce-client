import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProductsByCategoryAction } from "../pages/product/productAction";

const Main = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Tilte = styled.h1`
  color: skyblue;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Button = styled(Link)`
  border: none;
  padding: 10px;
  background-color: white;
  color: Grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item, search }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(getAllProductsByCategoryAction(search));
  };

  return (
    <Main>
      <Image src={item.img} />
      <Info>
        <Tilte>{item.title}</Tilte>
        <Button
          to={`/categories?category=${item.title}`}
          onClick={handleOnClick}
        >
          SHOW NOW
        </Button>
      </Info>
    </Main>
  );
};

export default CategoryItem;
