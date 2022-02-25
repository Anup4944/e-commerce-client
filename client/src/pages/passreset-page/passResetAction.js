import { otpApi, updatePassApi } from "../../apiS/passResetApi";
import {
  passResetPending,
  sendOtpSuccess,
  passResetFail,
  passResetSuccess,
} from "./passResetSlice";

export const otpAction = (email) => async (dispatch) => {
  try {
    dispatch(passResetPending());

    const result = await otpApi(email);

    result.status === "success"
      ? dispatch(sendOtpSuccess(result))
      : dispatch(passResetFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(passResetFail(err));
  }
};

export const updatePasswordAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(passResetPending());

    const { status, message } = await updatePassApi(frmDt);

    if (status === "successful") {
      return dispatch(passResetSuccess({ status, message }));
    }
  } catch (error) {
    dispatch(passResetFail(error.message));
  }
};
