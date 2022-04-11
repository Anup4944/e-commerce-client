import FavouriteSchema from "./favourite.schema.js";

export const saveFavourite = (favouriteObj) => {
  return FavouriteSchema(favouriteObj).save();
};

export const getAllFavourite = () => {
  return FavouriteSchema.find();
};
export const removeFavouriteByProdId = (_id) => {
  return FavouriteSchema.findByIdAndDelete({
    _id: products._id,
  }).remove();
};

export const getFavouriteByClient = (_id) => {
  return FavouriteSchema.find({ clientId: _id });
};
