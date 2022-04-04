import express from "express";
const router = express.Router();
import stripePackage from "stripe";
import { saveOrder } from "../models/orders/order.model.js";

const stripe = stripePackage(process.env.STRIPE_PRIVATE_KEY);

router.post("/payment", (req, res) => {
  try {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "aud",
      },
      (stripeError, stripeRes) => {
        if (stripeError) {
          res.send({
            status: "error",
            message: stripeError.message,
          });
        } else {
          res.send({
            status: "success",
            message: "PAYMENT SUCCESS",
            stripeRes,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
