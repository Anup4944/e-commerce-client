import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "./loginAction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 60%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  margin: "10px 0px",
};

const initialState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [client, setClient] = useState(initialState);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(client));
  };
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form onSubmit={handleOnSubmit}>
          <Input
            placeholder="Enter your ëmail"
            name="email"
            type="email"
            value={client.email}
            onChange={handleOnChange}
          />
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
            value={client.password}
            onChange={handleOnChange}
          />
          <Button>LOGIN</Button>
          <Link style={linkStyle}>FORGOT PASSWORD</Link>
          <Link to="/register" style={linkStyle}>
            CREATE ACCOUNT
          </Link>
        </Form>
      </Wrapper>{" "}
    </Container>
  );
};

export default SignIn;
