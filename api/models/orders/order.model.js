import OrderSchema from "./order.schema.js";

export const saveOrder = (prodObj) => {
  return OrderSchema(prodObj).save();
};

export const getAllOrder = () => {
  return OrderSchema.find();
};

export const getOrderByClient = (_id) => {
  return OrderSchema.find({ clientId: _id });
};
