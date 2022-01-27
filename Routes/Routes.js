const ResetPassword = require("./ResetPassword");
const User = require("./User");
const Profile = require("./Profile");
const Payment = require("./Payment");
const Passport = require("./Passport");
const IdCard = require("./IdCard");
const Approve = require("./Approve");
const Documents = require("./Documents");
const Wallet = require("./Wallet");

exports.Routes = {
  User: User,
  ResetPassword: ResetPassword,
  Profile: Profile,
  Payment: Payment,
  Passport: Passport,
  IdCard: IdCard,
  Documents: Documents,
  Approve: Approve,
  Wallet: Wallet,
};
