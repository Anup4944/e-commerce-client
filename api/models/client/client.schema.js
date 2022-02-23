import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
    },

    refreshJWT: {
      token: {
        type: String,
        require: true,
        default: "",
      },
      addedAt: {
        type: Date,
        require: true,
        default: Date.now(),
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Client", ClientSchema);
