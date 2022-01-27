const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.SECRET;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      { url: /\/upload(.*)/, method: ["GET", "OPTIONS"] },
      { url: /\/Wallet(.*)/, method: ["GET","POST","DELETE", "OPTIONS"] },
      "/User/login",
      "/User/register",
      "/",
      "/ResetPassword",
      "/ResetPassword/Change",
    ],
  });
}


module.exports = authJwt;