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

    savedFav
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

    result
      ? res.send({
          status: "success",
          message: "Here are all favourites product",
          result,
        })
      : res.send({
          status: "error",
          message: "Unable to get favourites product , please try again later",
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

    const result = await getFavouriteByClient(_id);

    result.length
      ? res.send({
          status: "success",
          message: "Your liked products",
          result,
        })
      : res.send({
          status: "error",
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
