import OrderSchema from "./order.schema.js";

export const saveOrder = (orderObj) => {
  console.log("frm modal", orderObj);
  return OrderSchema(orderObj).save();
};

export const getAllOrder = () => {
  return OrderSchema.find();
};

export const getOrderByClient = (_id) => {
  return OrderSchema.find({ clientId: _id });
};
