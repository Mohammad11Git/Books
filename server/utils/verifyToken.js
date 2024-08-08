const UserToken = require("../models/userTokenModel");
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    const findToken = UserToken.findOne({ token });
    if (!findToken) return reject({ mssge: "Invalid token" });
    jwt.verify(token, "access", (err, tokenDetails) => {
      if (err) return reject({ mssge: "Invalid token" });
      resolve({
        tokenDetails,
        message: "Valid token",
      });
    });
  });
};

module.exports = verifyToken;
