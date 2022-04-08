import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "./registerAction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
  color: palevioletred;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-weight: bold;
`;

const Button = styled.button`
  width: inherit;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const Warning = styled.div`
  margin-top: 3px;
  color: red;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 250px;
`;

const Items = styled.li`
  margin-top: 5px;
  list-style: none;
  color: red;
`;

const SuccessMg = styled.span`
  color: green;
  margin-top: 10px;
`;

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confPass: "",
};

const passVerificationError = {
  isLengthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasOneNumber: false,
  hasSpecialChar: false,
  confPassword: false,
};

const Register = () => {
  const [clientDetails, setClientDetails] = useState(initialState);

  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { status, message } = useSelector((state) => state.register);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setClientDetails({
      ...clientDetails,
      [name]: value,
    });

    if (name === "password") {
      const isLengthy = value.length > 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasOneNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[@ ,#, $ ,%]/.test(value);

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasUpperCase,
        hasLowerCase,
        hasOneNumber,
        hasSpecialChar,
      });
    }

    if (name === "confPass") {
      setPasswordError({
        ...passwordError,
        confPass: clientDetails.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(clientDetails));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>

        {status === "success" && <SuccessMg>{message}</SuccessMg>}
        <Form onSubmit={handleOnSubmit}>
          <Input
            placeholder="Enter your first name"
            name="firstName"
            type="text"
            valeu={clientDetails.firstName}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Enter your last name"
            name="lastName"
            type="text"
            valeu={clientDetails.lastName}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Enter your username"
            name="userName"
            type="text"
            valeu={clientDetails.userName}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Enter your email"
            name="email"
            type="email"
            valeu={clientDetails.email}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Enter your password"
            name="password"
            type="password"
            valeu={clientDetails.password}
            onChange={handleOnChange}
            required
          />
          <Input
            placeholder="Please confirm password"
            name="confPass"
            type="password"
            valeu={clientDetails.confPass}
            onChange={handleOnChange}
            required
          />
          <List>
            {!passwordError.confPass && (
              <Warning>Password doesnt match</Warning>
            )}

            {!passwordError.isLengthy && <Items> Min 8 characters</Items>}

            {!passwordError.hasUpperCase && (
              <Items> At least one uppercase</Items>
            )}

            {!passwordError.hasLowerCase && (
              <Items> At least one lowercase</Items>
            )}

            {!passwordError.hasOneNumber && <Items> At least one number</Items>}

            {!passwordError.hasSpecialChar && (
              <Items>At least one special character i.e @ # $ %</Items>
            )}
          </List>
          <Agreement>
            By creating this account, I consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create account</Button>
        </Form>

        <Link to="/login" style={linkStyle}>
          <Button>Back to Sign In</Button>
        </Link>
      </Wrapper>{" "}
    </Container>
  );
};

export default Register;
