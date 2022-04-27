import React from "react";
import styled from "styled-components";

const Msg = styled.div`
  margin-top: 20px;
  text-align: center;
  height: 50vh;
  width: 100vw;
`;

const ThankYouComp = () => {
  return (
    <Msg>
      {" "}
      <h1>Thank you for choosing us.</h1>
    </Msg>
  );
};

export default ThankYouComp;
