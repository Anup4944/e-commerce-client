import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.ObjectId,
      ref: "Client",
    },
    products: {
      type: Array,
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    address: {
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      postal_code: {
        type: String,
      },
      state: {
        type: String,
      },
    },
    status: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
