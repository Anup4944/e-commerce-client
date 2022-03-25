import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Main = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: Grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Main>
      <Image src={item.img} />
      <Info>
        <Tilte>{item.title}</Tilte>
        <Button>SHOW NOW</Button>
      </Info>
    </Main>
  );
};

export default CategoryItem;
