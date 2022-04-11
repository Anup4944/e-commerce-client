import {
  getFavProdByClientApi,
  removeFavOrderApi,
  saveFavOrderApi,
} from "../../apiS/favApi";
import {
  getFavProdByClientSuccess,
  requestFail,
  requestPending,
  saveFavProdSuccess,
  removeFavProdSuccess,
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

export const removeFavProdAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await removeFavOrderApi(_id);

    result.status === "success"
      ? dispatch(removeFavProdSuccess(result))
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

    const result = await getFavProdByClientApi(_id);

    result.status === "success"
      ? dispatch(getFavProdByClientSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
