import { getOrderByClientApi, saveOrderApi } from "../../apiS/orderApi";
import {
  saveOrderSuccess,
  saveOrderFail,
  getOrderByClientSuccess,
} from "./checkOutSlice";

export const saveOrderAction = (orderData) => async (dispatch) => {
  try {
    const result = await saveOrderApi(orderData);

    result.status === "success"
      ? dispatch(saveOrderSuccess(result))
      : dispatch(saveOrderFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(saveOrderFail(err));
  }
};
export const getOrderByClientAction = (_id) => async (dispatch) => {
  try {
    const result = await getOrderByClientApi(_id);

    result.status === "success"
      ? dispatch(getOrderByClientSuccess(result))
      : dispatch(saveOrderFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(saveOrderFail(err));
  }
};
