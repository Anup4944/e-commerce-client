import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updatePasswordAction } from "../../pages/passreset-page/passResetAction";

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

const Iuput = styled.input`
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
  color: green;
  margin-bottom: 10px;
`;

const passVerificationError = {
  isLengthy: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasOneNumber: false,
  hasSpecialChar: false,
  confPassword: false,
};

const Warning = styled.div`
  margin-top: 3px;
  color: red;
`;

const List = styled.ul`
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Items = styled.li`
  margin-top: 5px;
  list-style: none;
  color: red;
`;

const initialState = {
  pin: "",
  newPassword: "",
  confPass: "",
};

const UpdatePass = () => {
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const [updatePass, setUpdatePass] = useState(initialState);

  const { status, message, email } = useSelector(
    (state) => state.passwordReset
  );

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUpdatePass({
      ...updatePass,
      [name]: value,
    });

    if (name === "newPassword") {
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
        confPass: updatePass.newPassword === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { pin, newPassword } = updatePass;

    const newPassObj = { pin, password: newPassword, email };

    dispatch(updatePasswordAction(newPassObj));
  };

  return (
    <MainContainer>
      <EmailForm onSubmit={handleOnSubmit}>
        {status === "success" && <SuccessMg>{message}</SuccessMg>}

        <Header>Update password</Header>
        <Iuput
          placeholder="Enter your 5 digit pin"
          type="number"
          name="pin"
          value={updatePass.pin}
          required
          onChange={handleOnChange}
        />
        <Iuput
          placeholder="Enter your new password"
          type="password"
          name="newPassword"
          value={updatePass.newPassword}
          required
          onChange={handleOnChange}
        />
        <Iuput
          placeholder="Confirm passowrd"
          type="password"
          name="confPass"
          value={updatePass.confPass}
          onChange={handleOnChange}
          required
        />
        <List>
          {!passwordError.confPass && <Warning>Password doesnt match</Warning>}

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
        <Button type="submit">Update password</Button>
      </EmailForm>
    </MainContainer>
  );
};

export default UpdatePass;
