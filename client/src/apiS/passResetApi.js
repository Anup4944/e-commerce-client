import axios from "axios";

const getOtpUrl = "http://localhost:5001/api/v1/auth/otp";

export const otpApi = async (email) => {
  try {
    const { data } = await axios.post(getOtpUrl, { email });
    return data;
  } catch (error) {
    console.log(error);
  }
};
