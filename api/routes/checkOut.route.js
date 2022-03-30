import express from "express";
const router = express.Router();
import Stripe from "stripe";

const stripe = Stripe("sk_test_iTtW5Zx4oKCrS9MQCjvJbBPW00f8C0PmUp");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.bodyTokenId,
      amount: req.body.amount,
      currency: "AUD",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
