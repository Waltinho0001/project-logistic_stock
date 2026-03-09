const createUser = require("./createUser.js");
const findUserByID = require("./findUserByID.js");
const getAllUsers = require("./getAllUsers.js");
const updateUser = require("./updateUser.js");
const deleteUser = require("./deleteUser.js");

module.exports = {
  createUser,
  findUserByID,
  getAllUsers,
  updateUser,
  deleteUser
};