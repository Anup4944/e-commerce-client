import React from "react";
import LoginForm from "../../components/login-form/LoginForm";
import { useSelector } from "react-redux";
import EnterEmail from "../../components/pass-reset-form/EnterEmail";

const LoginPage = () => {
  const { passUpdate } = useSelector((state) => state.login);
  return passUpdate ? <EnterEmail /> : <LoginForm />;
};

export default LoginPage;
