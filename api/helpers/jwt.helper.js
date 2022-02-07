import jwt from "jsonwebtoken";

import { storeAccessJwt } from "../models/session/session.model.js";

import { storeRefreshJwt } from "../models/user/user.model.js";

export const createAccessJwt = (email, _id) => {
  return new Promise((resolve, reject) => {
    try {
      const accessJwt = jwt.sign({ email, _id }, process.env.JWT_ACCESS_KEY, {
        expiresIn: "20d",
      });

      if (accessJwt) {
        const newSession = {
          accessJWT: accessJwt,
          userId: _id,
        };

        storeAccessJwt(newSession);
      }
      resolve(accessJwt);
    } catch (error) {
      reject(error);
    }
  });
};

export const createRefreshJwt = (email, _id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const refreshJwt = jwt.sign({ email }, process.env.JWT_REFRESH_KEY, {
        expiresIn: "30d",
      });
      await storeRefreshJwt(_id, refreshJwt);
      resolve(refreshJwt);
    } catch (error) {
      reject(error);
    }
  });
};

export const verifyAccessJwt = (accessJwt) => {
  try {
    const decodedAcc = jwt.verify(accessJwt, process.env.JWT_ACCESS_SECRET);

    return Promise.resolve(decodedAcc);
  } catch (error) {
    console.log(error.message);
    return Promise.resolve(false);
  }
};

export const verifyRefreshJwt = (refreshJwt) => {
  try {
    const decoded = jwt.verify(refreshJwt, process.env.JWT_REFRESH_KEY);
    return Promise.resolve(decoded);
  } catch (error) {
    return Promise.reject(false);
  }
};
