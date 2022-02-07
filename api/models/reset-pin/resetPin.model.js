import ResetPinSchema from "./resetPin.schema.js";

export const storePin = async (newPin) => {
  try {
    const result = await ResetPinSchema(newPin).save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const findPin = async (filter) => {
  try {
    const result = await ResetPinSchema.findOne(filter);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePin = async (_id) => {
  try {
    const result = await ResetPinSchema.findByIdAndDelete(_id);
    return result;
  } catch (error) {
    console.log(error);
  }
};
