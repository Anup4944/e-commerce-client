import axios from "axios";

const saveOrderUrl = "http://localHost:5001/api/v1/order";

export const saveOrderApi = async (orderData) => {
  try {
    const { data } = await axios.post(saveOrderUrl, orderData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByClientApi = async (_id) => {
  try {
    const { data } = await axios.get(saveOrderUrl + `/${_id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
