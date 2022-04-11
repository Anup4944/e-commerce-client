import mongoose from "mongoose";

const FavouriteSchema = mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.ObjectId,
      ref: "Client",
    },
    products: {
      type: Array,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Favourite", FavouriteSchema);
