import express from "express";
import {
  getAllProducts,
  getAllProductsByCategory,
  getProductById,
} from "../models/product/product.model.js";
const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    let allProducts;

    const categoryName = req.query.category;

    categoryName
      ? (allProducts = await getAllProductsByCategory(categoryName))
      : (allProducts = await getAllProducts());

    res.send({
      status: "success",
      message: "Here are the products",
      allProducts,
    });
  } catch (error) {
    throw error;
  }
});

// GET PRODUCT BY ID
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const singleProduct = await getProductById(_id);

    singleProduct?._id
      ? res.send({
          status: "success",
          message: "Here is single products",
          singleProduct,
        })
      : res.send({
          status: "error",
          message: "No product found",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "No product found",
    });
  }
});

export default router;
