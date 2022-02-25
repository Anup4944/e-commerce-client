import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { otpAction } from "../../pages/passreset-page/passResetAction";

const MainContainer = styled.div`
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

const Header = styled.div`
  font-size: 25px;
  min-width: 50%;
  font-weight: 300;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 20%;
`;

const Email = styled.input`
  min-width: 65%;
  margin: 10px 0px;
  padding: 10px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  width: 60%;
  border: none;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const SuccessMg = styled.span`
  color: red;
  margin-top: 10px;
`;

const EnterEmail = () => {
  const { status, message, sendOtpReq } = useSelector(
    (state) => state.passwordReset
  );
  const [email, setEmail] = useState("");

  const [formSwitcher, setFormSwitcher] = useState(sendOtpReq);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(otpAction(email));
  };

  return (
    <MainContainer>
      <EmailForm onSubmit={handleOnSubmit}>
        {status === "error" && <SuccessMg>{message}</SuccessMg>}

        <Header> Enter your email</Header>

        <Email
          placeholder="Enter your email"
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <Button type="submit">Send pin</Button>
      </EmailForm>
    </MainContainer>
  );
};

export default EnterEmail;
