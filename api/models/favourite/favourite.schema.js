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
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Favourite", FavouriteSchema);
