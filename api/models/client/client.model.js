import ClientSchema from "./client.schema.js";

export const createUser = (userObj) => {
  return ClientSchema(userObj).save();
};

export const getUserByEmail = (email) => {
  return ClientSchema.findOne({ email });
};

export const getUserById = (_id) => {
  return ClientSchema.findById(_id);
};

export const getUsers = () => {
  return ClientSchema.find();
};

export const verifyEmail = () => {
  return ClientSchema.findOne({ email });
};

export const storeRefreshJwt = (_id, refreshJwt) => {
  return ClientSchema.findOneAndUpdate(
    { _id },
    {
      $set: {
        "refreshJWT.token": refreshJwt,
        "refreshJWT.addedAt": Date.now(),
      },
    },
    { new: true }
  );
};

export const deleteRefreshJwtByUserId = (_id) => {
  return ClientSchema.findOneAndUpdate(
    { _id },
    {
      $set: { "refreshJWT.token": "", "refreshJWT.addedAt": Date.now() },
    },
    {
      new: true,
    }
  );
};

export const deleteRefreshJwtByToken = (refreshJWT) => {
  ClientSchema.findOneAndUpdate(
    { "refreshJWT.token": refreshJWT },
    {
      "refreshJWT.token": "",
    }
  )
    .then((user) => {})
    .catch((err) => {});
};

export const deleteRefreshJwtByUserEmail = (email) => {
  return ClientSchema.findOneAndUpdate(
    { email },
    {
      $set: { "refreshJWT.token": " ", "refreshJWT.addedAt": Date.now() },
    },
    {
      new: true,
    }
  );
};

export const getUserByEmailAndRefreshJWT = ({ email, refreshJwt }) => {
  return ClientSchema.findOne({
    email,
    "refreshJWT.token": refreshJwt,
  });
};

export const getUserProfileByRefreshJWT = (refJwt) => {
  return ClientSchema.findOne({ "refreshJWT.token": refJwt });
};

export const updateNewPassword = ({ email, hashPass }) => {
  return ClientSchema.findOneAndUpdate(
    { email },
    {
      $set: { password: hashPass },
    },
    {
      new: true,
    }
  );
};

export const updatePass = ({ newPassword, email }) => {
  return ClientSchema.findOneAndUpdate(
    { email },
    {
      $set: { password: newPassword },
    },
    { new: true }
  );
};
