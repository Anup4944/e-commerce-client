import SessionSchema from "./session.schema.js";

export const storeAccessJwt = (newJwt) => {
  return SessionSchema(newJwt).save();
};

export const getAccessJwt = async (accessJwt) => {
  return SessionSchema.findOne(accessJwt);
};

export const deleteAccessJwtByUserId = (userId) => {
  return SessionSchema.findOneAndDelete(userId);
};

export const deleteAccessJwt = (accJwt) => {
  return SessionSchema.findOneAndDelete(accJwt)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNewAccessJwt = (refreshJwt) => {
  return SessionSchema(refreshJwt).save();
};
