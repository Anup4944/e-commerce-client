import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../pages/login/loginAction";

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

const SuccessMg = styled.span`
  color: red;
  margin-top: 10px;
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

const LoginForm = () => {
  const [client, setClient] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth, status, message } = useSelector((state) => state.login);

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

    isAuth && history.push("/");
  };
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        {status === "error" && <SuccessMg>{message}</SuccessMg>}

        <Form onSubmit={handleOnSubmit}>
          <Input
            placeholder="Enter your ëmail"
            name="email"
            type="email"
            value={client.email}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
            value={client.password}
            onChange={handleOnChange}
            required
          />
          <Button type="submit">LOGIN</Button>
          <Link to="/password-reset" style={linkStyle}>
            FORGOT PASSWORD
          </Link>
          <Link to="/register" style={linkStyle}>
            CREATE ACCOUNT
          </Link>
        </Form>
      </Wrapper>{" "}
    </Container>
  );
};

export default LoginForm;
