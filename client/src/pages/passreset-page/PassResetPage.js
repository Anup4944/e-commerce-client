import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import EnterEmail from "../../components/pass-reset-form/EnterEmail";
import UpdatePass from "../../components/pass-reset-form/UpdatePass";

const PassResetPage = () => {
  const { sendOtpReq } = useSelector((state) => state.passwordReset);
  return sendOtpReq ? <UpdatePass /> : <EnterEmail />;
};

export default PassResetPage;
