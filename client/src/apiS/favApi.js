import axios from "axios";

const saveFavOrderUrl = "http://localHost:5001/api/v1/fav";

export const saveFavOrderApi = async (prodDt) => {
  try {
    const { data } = await axios.post(saveFavOrderUrl, prodDt);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavProdByClientApi = async (_id) => {
  try {
    const { data } = await axios.get(`http://localHost:5001/api/v1/fav/${_id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
