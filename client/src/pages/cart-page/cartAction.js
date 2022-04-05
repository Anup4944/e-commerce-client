import {
  cartRequestPending,
  addProductCartSuccess,
  removeProductCartSuccess,
  requestCartFail,
} from "./cartSlice";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(cartRequestPending());
    dispatch(addProductCartSuccess(product));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestCartFail(err));
  }
};

export const removeFromCart = (_id) => async (dispatch) => {
  try {
    dispatch(cartRequestPending());
    dispatch(removeProductCartSuccess(_id));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
