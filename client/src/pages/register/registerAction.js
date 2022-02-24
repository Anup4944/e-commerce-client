import { registerApi } from "../../apiS/registerApi";
import {
  registerFail,
  registerPending,
  registerSuccess,
} from "./registerSlice";

export const registerAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(registerPending());

    const result = await registerApi(frmDt);

    result.status === "success"
      ? dispatch(registerSuccess(result))
      : dispatch(registerFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(registerFail(err));
  }
};
