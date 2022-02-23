import axios from "axios";

const loginUrl = "http://localhost:5001/api/v1/auth/login";

export const loginApi = () => {
  try {
    const { data } = await axios.post(loginUrl, frmDt);
    return data;
  } catch (error) {
    console.log(error);
  }
};
