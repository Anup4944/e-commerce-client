import { getAllCategoryApi } from "../../apiS/categoryApi";
import {
  getAllCategorySuccess,
  requestFail,
  requestPending,
} from "./categorySlice";

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllCategoryApi();

    console.log(result);

    result.status === "success"
      ? dispatch(getAllCategorySuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
