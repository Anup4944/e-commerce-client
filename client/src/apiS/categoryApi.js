import axios from "axios";

const rootUrl = "http://localHost:5001/api/v1/category";

export const getAllCategoryApi = async () => {
  try {
    const { data } = await axios.get(rootUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};
