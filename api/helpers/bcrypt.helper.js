import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (plainPassword) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(bcrypt.hashSync(plainPassword, saltRounds));
    } catch (error) {
      reject(error);
    }
  });
};

export const comparePassword = (plainPassword, hashedPassFromDB) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(bcrypt.compare(plainPassword, hashedPassFromDB));
    } catch (error) {
      reject(error);
    }
  });
};
