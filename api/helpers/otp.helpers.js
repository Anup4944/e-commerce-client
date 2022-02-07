export const getRandOTP = (length) => {
  let otp = "";
  for (let i = 1; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};
