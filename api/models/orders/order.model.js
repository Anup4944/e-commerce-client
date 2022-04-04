import OrderSchema from "./order.schema.js";

export const saveOrder = (prodObj) => {
  return OrderSchema(prodObj).save();
};
