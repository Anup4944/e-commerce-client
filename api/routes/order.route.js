import express from "express";
import { saveOrder } from "../models/orders/order.model.js";
const router = express.Router();

//CREATE ORDER
router.post("/", async (req, res) => {
  const newOrder = req.body;

  try {
    const savedOrder = await saveOrder(newOrder);

    savedOrder._id
      ? res.send({
          status: "success",
          message: "Order has been saved",
          savedOrder,
        })
      : res.send({
          status: "error",
          message: "Unable to save order , please try again later",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to save order , please try again later",
      error,
    });
  }
});

// GET MONTHLY INCOME

export default router;
