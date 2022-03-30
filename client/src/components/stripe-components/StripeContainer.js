import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY = process.env.PK;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <>
      <Elements stripe={stripeTestPromise} />
      <h1>PAYMENT</h1>
    </>
  );
};

export default StripeContainer;
