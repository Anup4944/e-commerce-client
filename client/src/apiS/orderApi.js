import axios from "axios";

const saveOrderUrl = "http://localHost:5001/api/v1/order";

export const saveOrderApi = async (orderData) => {
  console.log("from order api", orderData);
  try {
    const { data } = await axios.post(saveOrderUrl, orderData);
    console.log("saved order response ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
