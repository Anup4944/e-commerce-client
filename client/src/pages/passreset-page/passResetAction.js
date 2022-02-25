import { otpApi } from "../../apiS/passResetApi";
import {
  passResetPending,
  sendOtpSuccess,
  passResetFail,
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
