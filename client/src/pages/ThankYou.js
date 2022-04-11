import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Msg = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Msg> Thank you for choosing us. </Msg>
      <Footer />
    </>
  );
};

export default ThankYou;
