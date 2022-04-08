import express from "express";
import {
  saveFavourite,
  getAllFavourite,
  getFavouriteByClient,
} from "../models/favourite/favourite.model.js";

const router = express.Router();

//SAVE FAVOURITE PRODUCT
router.post("/", async (req, res) => {
  const newFav = req.body;

  try {
    const savedFav = await saveFavourite(newFav);

    savedFav._id
      ? res.send({
          status: "success",
          message: "Product added to your liked list.",
          savedFav,
        })
      : res.send({
          status: "error",
          message: "Unable to add product , please try again later",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: error.message,
    });
  }
});

// GET ALL FAVOURITE
router.get("/", async (req, res) => {
  try {
    const result = await getAllFavourite();

    result.length
      ? res.send({
          status: "success",
          message: "Here are all favourites product",
          result,
        })
      : res.send({
          status: "error",
          message: "No products in favourite.",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

// GET FAVOURITE BY CLIENT ID
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const prodByClientId = await getFavouriteByClient(_id);

    prodByClientId.length
      ? res.send({
          status: "success",
          message: "Your liked products",
          prodByClientId,
        })
      : res.send({
          status: "success",
          message: "You can view your liked products here",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get liked products , please try again later",
    });
  }
});

export default router;
