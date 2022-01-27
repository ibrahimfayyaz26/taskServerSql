const ResetPassword = require("./ResetPassword");
const Transaction = require("./Transaction");
const User = require("./User");
const Wallet = require("./Wallet");

Wallet.hasMany(Transaction,{
    constraints: true,
    onDelete: "CASCADE",
  })

exports.Models = {
  User:User,
  ResetPassword:ResetPassword,
  Wallet:Wallet,
  Transaction:Transaction  
}