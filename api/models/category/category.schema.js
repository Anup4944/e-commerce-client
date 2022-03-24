import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    newCategory: {
      type: String,
      unique: true,
    },
    parentCategory: {
      type: mongoose.Schema.ObjectId,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
