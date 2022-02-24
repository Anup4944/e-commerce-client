import axios from "axios";

const registerUrl = "http://localhost:5001/api/v1/user/register";

export const registerApi = async (frmDt) => {
  try {
    const { data } = await axios.post(registerUrl, frmDt);
    return data;
  } catch (error) {
    console.log(error);
  }
};
