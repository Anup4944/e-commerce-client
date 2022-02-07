import mongoose from "mongoose";

const ResetPinSchema = mongoose.Schema(
  {
    otp: {
      type: Number,
      require: true,
      default: null,
    },

    email: {
      type: String,
      require: true,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("ResetPin", ResetPinSchema);
