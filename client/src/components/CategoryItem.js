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

  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  background-color: #d9afd9;
  /* background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%); */

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
  color: black;
  font-size: 20px;
  font-weight: 700;
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
