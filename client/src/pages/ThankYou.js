import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThankYouComp from "../components/ThankYouComp";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <ThankYouComp />
      <Footer />
    </>
  );
};

export default ThankYou;
