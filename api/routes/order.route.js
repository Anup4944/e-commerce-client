import express from "express";
import { saveOrder } from "../models/orders/order.model.js";
const router = express.Router();

//CREATE ORDER
router.post("/", async (req, res) => {
  const newOrder = req.body;

  console.log("from fe", req.body);
  try {
    const savedOrder = await saveOrder(newOrder);

    console.log("saved order", savedOrder);
    res.send({ savedOrder });
  } catch (error) {
    res.send({ error });
  }
});

export default router;
