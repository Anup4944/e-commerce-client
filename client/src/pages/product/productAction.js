import {
  productApi,
  singleProductApi,
  singleProductByCategoryApi,
} from "../../apiS/productApi";
import {
  productRequestPending,
  getAllProductsSuccess,
  getSingleProductSuccess,
  getProductsByCategorySuccess,
  productRequestFail,
} from "./productSlice";

export const getAllProductsAction = () => async (dispatch) => {
  try {
    dispatch(productRequestPending());

    const result = await productApi();

    result.status === "success"
      ? dispatch(getAllProductsSuccess(result))
      : dispatch(productRequestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(productRequestFail(err));
  }
};

export const getAllProductsByCategoryAction = (search) => async (dispatch) => {
  try {
    dispatch(productRequestPending());

    const result = await singleProductByCategoryApi(search);

    result.status === "success"
      ? dispatch(getProductsByCategorySuccess(result))
      : dispatch(productRequestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(productRequestFail(err));
  }
};

export const getSingleProductsAction = (_id) => async (dispatch) => {
  try {
    dispatch(productRequestPending());

    const result = await singleProductApi(_id);

    result.status === "success"
      ? dispatch(getSingleProductSuccess(result))
      : dispatch(productRequestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(productRequestFail(err));
  }
};
