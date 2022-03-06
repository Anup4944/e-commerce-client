import axios from "axios";

const prodUrl = "http://localhost:5001/api/v1/product";

export const productApi = async () => {
  try {
    const { data } = await axios.get(prodUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const singleProductApi = async (_id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5001/api/v1/product/${_id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
