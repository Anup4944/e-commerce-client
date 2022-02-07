import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    isAvailable: {
      type: Boolean,
      require: true,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    onSale: {
      type: Boolean,
      require: true,
      default: false,
    },
    salePrice: {
      type: Number,
    },
    saleEndDate: {
      type: Date,
      default: null,
    },
    qty: {
      type: Number,
      require: true,
      default: 0,
    },
    images: {
      type: Array,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
