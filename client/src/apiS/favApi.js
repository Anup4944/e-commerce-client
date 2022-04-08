import axios from "axios";

const saveFavOrderUrl = "http://localHost:5001/api/v1/fav";

export const saveFavOrderApi = async (orderData) => {
  try {
    const { data } = await axios.post(saveFavOrderUrl, orderData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavOrderByClientApi = async (_id) => {
  try {
    const { data } = await axios.get(saveOrderUrl + `/${_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
