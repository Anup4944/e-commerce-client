import UserSchema from "./user.schema.js";

export const createUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

export const getUserById = (_id) => {
  return UserSchema.findById(_id);
};

export const getUsers = () => {
  return UserSchema.find();
};

export const verifyEmail = () => {
  return UserSchema.findOne({ email });
};

export const storeRefreshJwt = (_id, refreshJwt) => {
  return UserSchema.findOneAndUpdate(
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
  return UserSchema.findOneAndUpdate(
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
  UserSchema.findOneAndUpdate(
    { "refreshJWT.token": refreshJWT },
    {
      "refreshJWT.token": "",
    }
  )
    .then((user) => {})
    .catch((err) => {});
};

export const deleteRefreshJwtByUserEmail = (email) => {
  return UserSchema.findOneAndUpdate(
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
  return UserSchema.findOne({
    email,
    "refreshJWT.token": refreshJwt,
  });
};

export const getUserProfileByRefreshJWT = (refJwt) => {
  return UserSchema.findOne({ "refreshJWT.token": refJwt });
};

export const updateNewPassword = ({ email, hashPass }) => {
  return UserSchema.findOneAndUpdate(
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
  return UserSchema.findOneAndUpdate(
    { email },
    {
      $set: { password: newPassword },
    },
    { new: true }
  );
};
