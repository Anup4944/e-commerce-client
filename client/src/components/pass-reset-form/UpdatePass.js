import React from "react";
import styled from "styled-components";

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

const UpdatePass = () => {
  return (
    <MainContainer>
      <EmailForm>
        <Header>UPDATE PASS FORM</Header>

        <Email />
        <Button>Send pin</Button>
      </EmailForm>
    </MainContainer>
  );
};

export default UpdatePass;
