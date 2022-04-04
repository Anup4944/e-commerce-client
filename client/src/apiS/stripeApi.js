import axios from "axios";

const checkOutUrl = "http://localhost:5001/api/v1/checkout/payment";

export const checkOutApi = async (frmDt) => {
  try {
    const { data } = await axios.post(checkOutUrl, frmDt);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
