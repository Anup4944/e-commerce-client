import { loginApi, logOutApi } from "../../apiS/loginApi";
import {
  loginFail,
  loginPending,
  logoutSuccess,
  loginSuccess,
} from "./loginSlice";

export const loginAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(loginPending());

    const result = await loginApi(frmDt);
    const { accessJwt, refreshJwt } = result;

    accessJwt && window.sessionStorage.setItem("accessJwt", accessJwt);
    refreshJwt && window.localStorage.setItem("refreshJwt", refreshJwt);

    result.status === "success"
      ? dispatch(loginSuccess(result))
      : dispatch(loginFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(loginFail(err));
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(loginPending());

    const result = await logOutApi({
      accessJwt: window.sessionStorage.getItem("accessJwt"),
      refreshJwt: window.localStorage.getItem("refreshJwt"),
    });

    window.sessionStorage.removeItem("accessJwt");
    window.localStorage.removeItem("refreshJwt");

    dispatch(logoutSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(loginFail(err));
  }
};
