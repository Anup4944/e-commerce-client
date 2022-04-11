import express from "express";
import {
  getAllOrder,
  getOrderByClient,
  saveOrder,
} from "../models/orders/order.model.js";
const router = express.Router();

//CREATE ORDER OR SAVE ORDER AFTER PAYMENT
router.post("/", async (req, res) => {
  const newOrder = req.body;

  try {
    const savedOrder = await saveOrder(newOrder);

    savedOrder._id
      ? res.send({
          status: "success",
          message: "Order saved to history",
          savedOrder,
        })
      : res.send({
          status: "error",
          message: "Unable to save order , please try again later",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: error.message,
    });
  }
});

// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const result = await getAllOrder();

    result
      ? res.send({
          status: "success",
          message: "Here are all the orders",
          result,
        })
      : res.send({
          status: "error",
          message: "Unable to get order , please try again later",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

// GET ORDER BY CLIENT ID
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await getOrderByClient(_id);

    result.length
      ? res.send({
          status: "success",
          message: "Your purchase history so far",
          result,
        })
      : res.send({
          status: "error",
          message: "Please make purchase to view your history.",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

export default router;
