import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import EnterEmail from "../../components/pass-reset-form/EnterEmail";
import UpdatePass from "../../components/pass-reset-form/UpdatePass";

const PassResetPage = () => {
  const { passUpdate } = useSelector((state) => state.login);
  return passUpdate ? <UpdatePass /> : <EnterEmail />;
};

export default PassResetPage;
