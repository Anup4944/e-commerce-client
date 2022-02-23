import { SendOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Tilte = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 14;
  padding-left: 20px;
  height: 20px;
`;
const Button = styled.div`
  cursor: pointer;
  width: 50%;
  height: 40px;
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Newsletter = () => {
  return (
    <Container>
      <Tilte>Newsletter</Tilte>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input placeholder="Your email here....." name="email" type="email" />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
