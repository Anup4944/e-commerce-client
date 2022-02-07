import mongoose from "mongoose";

const SessionSchema = mongoose.Schema(
  {
    accessJWT: {
      type: String,
      require: true,
      default: "",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Session", SessionSchema);
