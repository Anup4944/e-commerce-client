import ProductSchema from "./Product.schema.js";

export const insertProduct = (prodObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ProductSchema(prodObj).save();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ProductSchema.find();

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getProductById = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ProductSchema.findById(_id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteProduct = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ProductSchema.findByIdAndDelete(_id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateProductById = ({ _id, updateProduct }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ProductSchema.findByIdAndUpdate(
        { _id },
        {
          $set: updateProduct,
        },
        { new: true }
      );
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
