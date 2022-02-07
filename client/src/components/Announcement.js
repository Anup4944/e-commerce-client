import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bolder;
`;

const Announcement = () => {
  return <Container>Dont miss out 50% Sale. T/C applies</Container>;
};

export default Announcement;
