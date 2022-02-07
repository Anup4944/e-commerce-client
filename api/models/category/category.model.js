import CategorySchema from "./category.schema.js";

export const createCat = (catObj) => {
  return CategorySchema(catObj).save();
};

export const getAllCategory = () => {
  return CategorySchema.find();
};
