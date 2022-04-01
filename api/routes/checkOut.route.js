import express from "express";
const router = express.Router();
import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_PRIVATE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const session = await stripe.customers
      .create({
        description: "My First Test Customer (created for API docs)",
      })

      .then(function (customer) {
        return stripe.customers.createSource(customer.id, {
          source: "tok_visa",
        });
      })
      .then(function (source) {
        return stripe.charges
          .create({
            amount: req.body.amount,
            currency: "aud",
            customer: source.customer,
          })
          .then((stripeData) => {
            console.log("Charge", stripeData);
            res.send({
              stripeData,
            });
          })
          .catch(function (err) {
            console.log(err);
            res.send({
              err,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
