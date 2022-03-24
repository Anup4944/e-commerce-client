import express from "express";
import { getAllCategory } from "../models/category/category.model.js";
const router = express.Router();

// GET ALL CATEGORY
router.get("/", async (req, res) => {
  try {
    const allCategories = await getAllCategory();
    res.send({
      status: "success",
      message: "Here are all categories",
      allCategories,
    });
  } catch (error) {
    throw error;
  }
});

export default router;
