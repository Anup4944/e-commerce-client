import axios from "axios";

const getOtpUrl = "http://localhost:5001/api/v1/auth/otp";

const passResetUrl = "http://localhost:5001/api/v1/auth/password";

export const otpApi = async (email) => {
  try {
    const { data } = await axios.post(getOtpUrl, { email });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updatePassApi = async (frmDt) => {
  try {
    const { data } = await axios.patch(passResetUrl, frmDt);
    return data;
  } catch (error) {
    console.log(error);
  }
};
