import { getFavOrderByClientApi, saveFavOrderApi } from "../../apiS/favApi";
import {
  getFavProdSuccess,
  requestFail,
  requestPending,
  saveFavProdSuccess,
} from "./favProductSlice";

export const saveFavProdAction = (prdDt) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await saveFavOrderApi(prdDt);

    result.status === "success"
      ? dispatch(saveFavProdSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const getFavProdByClientAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getFavOrderByClientApi(_id);

    result.status === "success"
      ? dispatch(getFavProdSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
